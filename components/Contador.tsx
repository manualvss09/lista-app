'use client';

import { useState } from "react";

type ContadorProps = {
  alunosMatriculados?: number;
};

type Aluno = {
  id: number;
  nome: string;
  presente: boolean;
};

export default function Contador({ alunosMatriculados = 11 }: ContadorProps) {
  const [n, setN] = useState(0);
  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: 1, nome: "Manuella Alves", presente: true },
    { id: 2, nome: "Ana Clara", presente: false },
    { id: 3, nome: "João Pedro", presente: true },
  ]);
  const [frontend, setFrontend] = useState(0);
  const [backend, setBackend] = useState(0);
  const [soPresentes, setSoPresentes] = useState(false);

  const presentes = alunos.filter((a) => a.presente).length;

  const alternarPresenca = (id: number) => {
    setAlunos((prev) => prev.map((a) => (a.id === id ? { ...a, presente: !a.presente } : a)));
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Matriculados</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900">{alunosMatriculados}</p>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Presentes</p>
          <p className="mt-2 text-3xl font-semibold text-emerald-700">{presentes}</p>
        </div>
        <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Contador</p>
          <p className="mt-2 text-3xl font-semibold text-cyan-700">{n}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-full bg-cyan-600 px-4 py-2 font-semibold text-white transition hover:bg-cyan-700" onClick={() => setN((value) => value + 1)}>
          +1
        </button>
        <button className="rounded-full bg-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-300" onClick={() => setN((value) => value - 1)}>
          -1
        </button>
        <div className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
          {n % 2 === 0 ? "Par" : "Ímpar"}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-600">Front-end: {frontend}</p>
          <button className="mt-3 rounded-full bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-600" onClick={() => setFrontend((value) => value + 1)}>
            + Front-end
          </button>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-600">Back-end: {backend}</p>
          <button className="mt-3 rounded-full bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600" onClick={() => setBackend((value) => value + 1)}>
            + Back-end
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <button className="rounded-full border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white" onClick={() => setSoPresentes((value) => !value)}>
          {soPresentes ? "Mostrar todos" : "Só presentes"}
        </button>

        <ul className="mt-4 space-y-2">
          {alunos.map((a) => (!soPresentes || a.presente) && (
            <li key={a.id} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              {a.nome}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Presença dos alunos</h2>
        <div className="mt-4 space-y-3">
          {alunos.map((a) => (
            <div key={a.id} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-800">{a.nome}</p>
                <p className="text-sm text-slate-500">{a.presente ? "Presente" : "Ausente"}</p>
              </div>
              <button className="rounded-full bg-slate-800 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700" onClick={() => alternarPresenca(a.id)}>
                {a.presente ? "Marcar ausente" : "Marcar presente"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}