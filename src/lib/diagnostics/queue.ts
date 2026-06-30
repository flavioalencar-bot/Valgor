import { processDigitalDiagnostic } from "./process";

const QUEUE_NAME = "processDigitalDiagnostic";

let queueInstance: import("bullmq").Queue | null = null;

function shouldUseQueue() {
  return process.env.USE_DIAGNOSTICS_QUEUE === "true" && Boolean(process.env.REDIS_URL);
}

function getRedisConnection() {
  const url = process.env.REDIS_URL ?? "redis://localhost:6379";
  try {
    const parsed = new URL(url);
    return {
      host: parsed.hostname,
      port: Number(parsed.port || 6379),
      password: parsed.password || undefined,
      maxRetriesPerRequest: null as null,
    };
  } catch {
    return { host: "localhost", port: 6379, maxRetriesPerRequest: null as null };
  }
}

export async function getDiagnosticsQueue() {
  if (!shouldUseQueue()) return null;
  if (queueInstance) return queueInstance;
  try {
    const { Queue } = await import("bullmq");
    queueInstance = new Queue(QUEUE_NAME, { connection: getRedisConnection() });
    return queueInstance;
  } catch {
    return null;
  }
}

/** Enfileira ou processa inline (padrão em dev — evita fila sem worker) */
export async function enqueueDigitalDiagnostic(id: string): Promise<"queued" | "inline"> {
  const queue = await getDiagnosticsQueue();
  if (queue) {
    try {
      await queue.add(
        QUEUE_NAME,
        { id },
        { removeOnComplete: 100, removeOnFail: 50, attempts: 2 },
      );
      return "queued";
    } catch {
      /* fallback inline */
    }
  }

  void processDigitalDiagnostic(id).catch(console.error);
  return "inline";
}

export async function startDiagnosticsWorker() {
  if (!shouldUseQueue()) {
    console.warn("[diagnostics-worker] USE_DIAGNOSTICS_QUEUE não está true — worker inativo.");
    return null;
  }
  const { Worker } = await import("bullmq");
  const worker = new Worker(
    QUEUE_NAME,
    async (job) => {
      await processDigitalDiagnostic(job.data.id as string);
    },
    { connection: getRedisConnection(), concurrency: 2 },
  );

  worker.on("failed", (job, err) => {
    console.error("[diagnostics-worker] failed", job?.id, err);
  });

  console.log("[diagnostics-worker] listening on", QUEUE_NAME);
  return worker;
}
