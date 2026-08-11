"use client";

import { useState } from "react";

export default function Input() {
  const [texto, setTexto] = useState<string>("");

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-slate-700" htmlFor="texto">
        Digite algo
      </label>
      <input
        id="texto"
        value={texto}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)}
        placeholder="Escreva aqui"
        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
      />
      <p className="rounded-xl bg-white px-3 py-2 text-sm text-slate-600">
        {texto ? `Texto digitado: ${texto}` : "Ainda não há texto"}
      </p>
      <p className="text-sm font-medium text-slate-500">{texto.length} caractere(s)</p>
    </div>
  );
}