
"use client";

import { useState } from "react";

type CardAlunoProps = {
  nome: string;
  cargo: string;
  nota?: number;
  presenca: boolean;
  periodo: string;
  ativo: boolean;
  vip: boolean;
  habilidades: string[];
};

export default function CardAluno({
  nome,
  cargo,
  periodo,
  ativo,
  vip,
  habilidades,
  presenca,
  nota,
}: CardAlunoProps) {
  const [presente, setPresente] = useState<boolean>(presenca);
  const [curtidas, setCurtidas] = useState<number>(0);

  const [turma, setTurma] = useState<string[]>([
    "Ana Carolina",
    "Daniel Guimarães",
  ]);

  const novo = "Manuella Alves";

  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-lg shadow-slate-300/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">{nome}</h3>
          <p className="mt-1 text-sm text-slate-300">{cargo}</p>
        </div>
        {vip && (
          <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900">
            VIP
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <span className={`rounded-full px-3 py-1 ${ativo ? "bg-emerald-500/20 text-emerald-300" : "bg-slate-700 text-slate-300"}`}>
          {ativo ? "Ativo" : "Inativo"}
        </span>
        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-200">Período {periodo}</span>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
        <p className="text-sm text-slate-300">
          Presença: <span className="font-semibold text-white">{presente ? "🟢 Presente" : "⚪ Ausente"}</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="rounded-full bg-cyan-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400" onClick={() => setPresente((value) => !value)}>
            Alterar presença
          </button>
          <button className="rounded-full border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-700" onClick={() => setCurtidas((value) => value + 1)}>
            ❤️ Curtir • {curtidas}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-slate-200">Habilidades</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {habilidades.map((hab) => (
            <span key={hab} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-100">
              {hab}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-4">
        <div className="flex items-center justify-between gap-3">
          <h4 className="text-sm font-semibold text-slate-200">Turma</h4>
          <button className="rounded-full border border-slate-600 px-3 py-1 text-sm font-medium text-slate-200 transition hover:bg-slate-700" onClick={() => setTurma((value) => [...value, novo])}>
            + Adicionar
          </button>
        </div>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          {turma.map((aluno) => (
            <li key={aluno} className="rounded-lg bg-slate-700/70 px-3 py-2">
              {aluno}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-sm text-slate-400">Nota: {nota || 0}</p>
    </article>
  );
}

