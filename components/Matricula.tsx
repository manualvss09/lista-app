'use client';

import { useState } from "react";

export default function Matricula() {
  const [nome, setNome] = useState("");
  const [turma, setTurma] = useState<string[]>([]);

  const adicionarAluno = () => {
    if (nome.trim() === "") return;

    setTurma([...turma, nome]);
    setNome("");
  };

  return (
    <div>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome"
      />

      <button onClick={adicionarAluno}>
        Adicionar
      </button>

      <ul>
        {turma.map((aluno, index) => (
          <li key={index}>{aluno}</li>
        ))}
      </ul>
    </div>
  );
}