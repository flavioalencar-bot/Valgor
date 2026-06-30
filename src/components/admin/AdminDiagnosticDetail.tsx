"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminNotesForm({
  id,
  contacted,
  adminNotes,
}: {
  id: string;
  contacted: boolean;
  adminNotes: string;
}) {
  const router = useRouter();
  const [notes, setNotes] = useState(adminNotes);
  const [saved, setSaved] = useState(false);

  async function save() {
    await fetch(`/api/diagnostics/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminNotes: notes, contacted }),
    });
    setSaved(true);
    router.refresh();
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mt-6 rounded-2xl border border-border bg-surface-card p-5">
      <h2 className="text-sm font-semibold">Observações comerciais</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={4}
        className="mt-2 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm"
        placeholder="Anotações do time comercial..."
      />
      <button type="button" onClick={save} className="mt-3 rounded-lg bg-fox-500 px-4 py-2 text-sm font-semibold text-white">
        {saved ? "Salvo!" : "Salvar observações"}
      </button>
    </div>
  );
}
