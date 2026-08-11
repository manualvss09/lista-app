"use client";

import { useState } from "react";

export default function Input() {
  const [texto, setTexto] = useState<string>("");
  const [form, setForm] = useState<{ nome: string; curso: string }>({ nome: "", curso: "" });
const handleSubmissao = (e: React.FormEvent) => {
    e.preventDefault(); 
    alert(`Preencha o nome`);
    alert(`Formulário enviado! Nome: ${form.nome} | Curso: ${form.curso}`);
  };

  
  return (
    <div className="space-y-6 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-5 shadow-sm shadow-slate-200/50 backdrop-blur-sm">
      <div className="space-y-4">
        
        <div className="space-y-4">
        <label className="text-sm font-semibold text-slate-700" htmlFor="texto">Digite algo</label>
        <input
          id="texto"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escreva aqui"
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm"
        />
        <div className="rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm">
          <p>{texto ? `Texto digitado: ${texto}` : "Ainda não há texto"}</p>
        </div>
      </div>
      </div>
         <form onSubmit={handleSubmissao} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700" htmlFor="nome">Nome</label>
            <input
              id="nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Seu nome"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700" htmlFor="curso">Curso</label>
            <input
              id="curso"
              value={form.curso}
              onChange={(e) => setForm({ ...form, curso: e.target.value })}
              placeholder="Seu curso"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm"
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-2 rounded-xl transition-colors shadow-md"
        >
          Enviar Formulário
        </button>
      </form>
    </div>
  );
} 

