"use client";

import { useState } from "react";

type InputProps = {
  id?: string;
  label?: string;
  value?: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
  placeholder?: string;
  type?: "text" | "number" | "textarea" | "select" | "checkbox";
  options?: string[];
  checked?: boolean;
};

export default function Input(props: InputProps = {}) {
  const { id, label, value, onChange, placeholder, type = "text", options, checked } = props;

  // If value/onChange provided, render a single controlled field (reusable)
  const isControlled = typeof value !== "undefined" && typeof onChange === "function";

  if (isControlled) {
    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      if (type === "checkbox") {
        const target = e.target as HTMLInputElement;
        onChange(!!target.checked);
      } else if (type === "number") {
        onChange(Number((e.target as HTMLInputElement).value));
      } else {
        onChange(e.target.value);
      }
    };

    return (
      <div className="space-y-1">
        {label && <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>}
        {type === "textarea" ? (
          <textarea id={id} value={String(value)} onChange={handle} placeholder={placeholder} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm" />
        ) : type === "select" ? (
          <select id={id} value={String(value)} onChange={handle} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm">
            {(options || []).map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : type === "checkbox" ? (
          <label className="inline-flex items-center gap-2">
            <input id={id} type="checkbox" checked={Boolean(value ?? checked)} onChange={handle} className="w-4 h-4" />
            <span className="text-sm text-slate-700">{placeholder}</span>
          </label>
        ) : (
          <input id={id} type={type} value={String(value)} onChange={handle} placeholder={placeholder} className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm" />
        )}
      </div>
    );
  }

  // Fallback: original composite component behavior (unchanged when used without props)
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

