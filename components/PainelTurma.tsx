'use client';

import { useState } from "react";

type Aluno = {
  id: number;
  nome: string;
  presente: boolean;
};

export default function PainelTurma() {
  const [nome, setNome] = useState("");

  const [turma, setTurma] = useState<Aluno[]>([
    { id: 1, nome: "Manuella Alves", presente: true },
    { id: 2, nome: "Ana Clara", presente: false },
    { id: 3, nome: "João Pedro", presente: true },
  ]);

  const adicionarAluno = () => {
    if (nome.trim() === "") return;

    const novoAluno: Aluno = {
      id: Date.now(),
      nome: nome,
      presente: false,
    };

    setTurma([...turma, novoAluno]);
    setNome("");
  };

  const removerAluno = (id: number) => {
    setTurma(turma.filter(a => a.id !== id));
  };

  const alternarPresenca = (id: number) => {
    setTurma(
      turma.map(a =>
        a.id === id
          ? { ...a, presente: !a.presente }
          : a
      )
    );
  };

  const presentes = turma.filter(a => a.presente).length;

  return (
    <div>
      <h1>Painel da Turma</h1>

      <p>
        {presentes} presentes / {turma.length} alunos
      </p>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome do aluno"
      />

      <button onClick={adicionarAluno}>
        Adicionar
      </button>

      <ul>
        {turma.map((a) => (
          <li key={a.id}>
            {a.nome} - {a.presente ? "Presente" : "Ausente"}

            <button onClick={() => alternarPresenca(a.id)}>
              {a.presente ? "Marcar ausente" : "Marcar presente"}
            </button>

            <button onClick={() => removerAluno(a.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}