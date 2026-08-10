
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
    <div>
      <h3>{nome}</h3>

      {vip && <span>VIP</span>}

      <p>{cargo}</p>

      <p>Período: {periodo}</p>

      <p>Status: {ativo ? "Ativo" : "Inativo"}</p>

      <p>
        Presença: {presente ? "🟢 Presente" : "⚪ Ausente"}
      </p>

      <button onClick={() => setPresente(!presente)}>
        Alterar presença
      </button>

      <p>Nota: {nota || 0}</p>

      <p>Habilidades:</p>

      <ul>
        {habilidades.map((hab) => (
          <li key={hab}>{hab}</li>
        ))}
      </ul>

      <p>❤️ {curtidas} curtidas</p>

      <button onClick={() => setCurtidas(curtidas + 1)}>
        ❤️ Curtir
      </button>

      <h3>Turma</h3>

      <button onClick={() => setTurma([...turma, novo])}>
        Adicionar Manuella Alves
      </button>

      <ul>
        {turma.map((aluno) => (
          <li key={aluno}>{aluno}</li>
        ))}
      </ul>
    </div>
  );
}

