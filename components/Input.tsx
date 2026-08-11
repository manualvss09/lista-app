"use client";

import { useState } from "react";

export default function Input() {
  const [texto, setTexto] = useState<string>("");
  const [form, setForm] = useState<{ nome: string; curso: string }>({ nome: "", curso: "" });

  
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-5 shadow-sm shadow-slate-200/50 backdrop-blur-sm">
      <div className="space-y-4">
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
        <div className="rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm">
          <p>{texto ? `Texto digitado: ${texto}` : "Ainda não há texto"}</p>
          <p className="mt-2 text-xs font-medium text-slate-500">{texto.length} caractere(s)</p>
        </div>
      </div>
    <form  type ="submit">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="nome">
            Nome
          </label>
          <input
            id="nome"
            value={form.nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, nome: e.target.value  })}
            placeholder="Seu nome"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700" htmlFor="curso">
            Curso
          </label>
          <input
            id="curso"
            value={form.curso}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, curso: e.target.value })}
            placeholder="Seu curso"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Saída</p>
        <p className="mt-3 text-base font-semibold text-slate-800">Olá, {form.nome || "visitante"}</p>
        <p className="mt-1 text-sm text-slate-600">{form.nome ? `${form.nome} — ${form.curso || "Curso não informado"}` : "Digite seu nome e curso para exibir os dados."}</p>
      </div>
      </form>
    </div>
  );
} 

