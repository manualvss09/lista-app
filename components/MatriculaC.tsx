"use client";

import { useState, FormEvent } from "react";
import Input from "@/components/Input";
import Contador from "@/components/Contador";
import CardAluno from "@/components/CardAluno";
import Caixa from "@/components/Caixa";

type Aluno = {
  id: number;
  nome: string;
  curso: string;
  nota: number;
  bolsista: boolean;
  obs: string;
};

type FormState = {
  nome: string;
  curso: string;
  nota: number;
  bolsista: boolean;
  obs: string;
};

const estadoInicial: FormState = {
  nome: "",
  curso: "Front-end",
  nota: 0,
  bolsista: false,
  obs: "",
};

export default function MatriculaCompleta() {
  const [form, setForm] = useState<FormState>(estadoInicial);
  const [turma, setTurma] = useState<Aluno[]>([]);
  const [erro, setErro] = useState<string>(""); 

  
  // form state managed via controlled `Input` components


  const enviar = (e: FormEvent) => {
    e.preventDefault();
    
  
    if (form.nome.trim() === "") {
      setErro("Nome é obrigatório!");
      return; 
    }
    if (form.nota < 0 || form.nota > 10) {
      setErro("A nota deve ser entre 0 e 10.");
      return;
    }

    setErro("");

    
    const novoAluno: Aluno = {
      id: Date.now(),
      ...form, 
    };

    setTurma([...turma, novoAluno]); 

    
    setForm(estadoInicial);
  };

  return (
    <Caixa className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold text-center text-slate-800">Matrícula Completa </h2>

      <form onSubmit={enviar} className="space-y-4">
        <div>
          <Input id="nome" label="Nome *" value={form.nome} onChange={(v) => setForm({ ...form, nome: String(v) })} placeholder="Digite o nome" />
          <p className="text-xs text-slate-500 mt-1">{form.nome.length} caracteres</p>
        </div>

      
        <div>
          <Input id="curso" label="Curso" type="select" value={form.curso} onChange={(v) => setForm({ ...form, curso: String(v) })} options={["Front-end", "Back-end", "Design", "Mobile", "Dados"]} />
        </div>

       
        <div>
          <Input id="nota" label="Nota (0-10)" type="number" value={form.nota} onChange={(v) => setForm({ ...form, nota: Number(v) })} />
        </div>

        
        <div>
          <Input id="obs" label="Observação" type="textarea" value={form.obs} onChange={(v) => setForm({ ...form, obs: String(v) })} placeholder="Alguma observação?" />
        </div>
        <div>
          <Input id="bolsista" type="checkbox" value={form.bolsista} onChange={(v) => setForm({ ...form, bolsista: Boolean(v) })} placeholder="Bolsista?" />
        </div>
        {erro && <p className="text-red-600 font-bold bg-red-50 p-2 rounded">{erro}</p>}

        <button
          type="submit"
          disabled={form.nome === ""}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Matricular Aluno
        </button>
      </form>

      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-800">Turma ({turma.length} alunos matriculados)</h3>

        {turma.length === 0 ? (
          <p className="text-slate-500">Nenhum aluno matriculado ainda.</p>
        ) : (
          <div className="space-y-6">
            <Contador alunosMatriculados={turma.length} />

            <div className="grid gap-4 md:grid-cols-2">
              {turma.map((aluno) => (
                <CardAluno
                  key={aluno.id}
                  nome={aluno.nome}
                  cargo={aluno.curso}
                  periodo="-"
                  ativo={true}
                  vip={aluno.bolsista}
                  habilidades={[]}
                  presenca={true}
                  nota={aluno.nota}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Caixa>
  );
}