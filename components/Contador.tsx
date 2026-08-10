'use client';

import { use, useState } from "react";

type ContadorProps = {
  alunosMatriculados?: number;
};

type Aluno = {
  id: number;
  nome: string;
  presente: boolean;
};

export default function Contador({ alunosMatriculados }: ContadorProps) {
  const [n, setN] = useState(0);

  const [alunos, setAlunos] = useState<Aluno[]>([
    { id: 1, nome: "Manuella Alves", presente: true },
    { id: 2, nome: "Ana Clara", presente: false },
    { id: 3, nome: "João Pedro", presente: true },
  ]);

  const presentes = alunos.filter(a => a.presente).length;

  const [frontend, setFrontend] = useState(0);
  const [backend, setBackend] = useState(0);

  const [soPresentes, setSoPresentes] = useState<boolean>(false);

  const alternarPresenca = (id: number) => {
    setAlunos(
      alunos.map(a =>
        a.id === id
          ? { ...a, presente: !a.presente }
          : a
      )
    );
  };

  return (
    <>
      📚 {alunosMatriculados} alunos matriculados

      <p>{presentes} presentes</p>

      {n}

      <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
        onClick={() => setN(n + 1)}
      >
        +1
      </button>

      <button
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-4 py-2 rounded-lg"
        onClick={() => setN(n - 1)}
      >
        -1
      </button>

      <div className="text-center">
        <p className="text-xl text-slate-600 mb-3">
          {n % 2 === 0 ? "par" : "ímpar"}
        </p>
      </div>

      <div>
        <p>Front-end: {frontend}</p>
        <button onClick={() => setFrontend(frontend + 1)}>
          + Front-end
        </button>
      </div>

      <div>
        <p>Back-end: {backend}</p>
        <button onClick={() => setBackend(backend + 1)}>
          + Back-end
        </button>
      </div>

      <div>
        <button onClick={() => setSoPresentes(!soPresentes)}>
          {soPresentes ? "Mostrar todos" : "Só presentes"}
        </button>

        <ul>
          {alunos.map((a) =>
            (!soPresentes || a.presente) && (
              <li key={a.id}>{a.nome}</li>
            )
          )}
        </ul>
      </div>

      <div>
        <h2>Presença dos alunos</h2>

        {alunos.map((a) => (
          <div key={a.id}>
            <p>{a.nome}</p>
            <p>{a.presente ? "Presente" : "Ausente"}</p>

            <button onClick={() => alternarPresenca(a.id)}>
              {a.presente ? "Marcar ausente" : "Marcar presente"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}