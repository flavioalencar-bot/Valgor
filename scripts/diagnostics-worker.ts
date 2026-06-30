import "dotenv/config";
import { startDiagnosticsWorker } from "../src/lib/diagnostics/queue";

startDiagnosticsWorker().catch((err) => {
  console.error(err);
  process.exit(1);
});
