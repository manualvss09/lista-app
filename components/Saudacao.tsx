"use client";

export default function Saudacao({ nome }: { nome: string }) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold text-white shadow-md transition hover:brightness-110"
      onClick={() => alert(`Olá, ${nome}!`)}
    >
      👋 Saudar
    </button>
  );
}