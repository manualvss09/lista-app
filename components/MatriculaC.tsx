'use client';

import { useState, ChangeEvent, FormEvent } from "react";

// Tipos para o Aluno e para o Form
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

// Estado inicial para limpar o form depois (Ex 11)
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
  const [erro, setErro] = useState<string>(""); // Ex 15: Erro na tela

  // Ex 04: onChange genérico (um handler para todos os campos)
  const aoMudar = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    // Ex 09 e 16: Lidando com checkbox (boolean) e number
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "number") {
      setForm({ ...form, [name]: Number(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Ex 05, 07, 11, 15: onSubmit, validação, erro e limpar
  const enviar = (e: FormEvent) => {
    e.preventDefault(); // Impede recarregar a página!
    
    // Ex 07 e 19: Validação
    if (form.nome.trim() === "") {
      setErro("Nome é obrigatório!");
      return; // Interrompe o envio
    }
    if (form.nota < 0 || form.nota > 10) {
      setErro("A nota deve ser entre 0 e 10.");
      return;
    }

    setErro(""); // Limpa o erro se passou na validação

    // Ex 18 e 14: Adicionando à lista com spread e ID (Date.now())
    const novoAluno: Aluno = {
      id: Date.now(),
      ...form, // Copia todos os dados do form para o novo aluno
    };

    setTurma([...turma, novoAluno]); // Spread na lista

    // Ex 11: Limpar o form (voltar ao estado inicial)
    setForm(estadoInicial);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-2xl shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold text-center text-slate-800">Matrícula Completa </h2>

      <form onSubmit={enviar} className="space-y-4">
        {/* Ex 08: Input Nome */}
        <div>
          <label className="block font-semibold text-slate-700">Nome *</label>
          <input
            name="nome"
            value={form.nome}
            onChange={aoMudar}
            placeholder="Digite o nome"
            className="w-full border border-slate-300 p-2 rounded-lg"
          />
          {/* Ex 12: Contador de caracteres */}
          <p className="text-xs text-slate-500 mt-1">{form.nome.length} caracteres</p>
        </div>

        {/* Ex 08: Select controlado */}
        <div>
          <label className="block font-semibold text-slate-700">Curso</label>
          <select
            name="curso"
            value={form.curso}
            onChange={aoMudar}
            className="w-full border border-slate-300 p-2 rounded-lg"
          >
            <option>Front-end</option>
            <option>Back-end</option>
            <option>Design</option>
            <option>Mobile</option>
            <option>Dados</option>
          </select>
        </div>

        {/* Ex 16: Campo número */}
        <div>
          <label className="block font-semibold text-slate-700">Nota (0-10)</label>
          <input
            type="number"
            name="nota"
            value={form.nota}
            onChange={aoMudar}
            min="0"
            max="10"
            className="w-full border border-slate-300 p-2 rounded-lg"
          />
        </div>

        {/* Ex 17: Textarea */}
        <div>
          <label className="block font-semibold text-slate-700">Observação</label>
          <textarea
            name="obs"
            value={form.obs}
            onChange={aoMudar}
            className="w-full border border-slate-300 p-2 rounded-lg"
            placeholder="Alguma observação?"
          />
        </div>

        {/* Ex 09: Checkbox controlado */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="bolsista"
            checked={form.bolsista}
            onChange={aoMudar}
            className="w-4 h-4"
          />
          <span className="font-semibold text-slate-700">
            Bolsista? {form.bolsista ? "Sim" : "Não"}
          </span>
        </label>

        {/* Ex 15: Mostrar erro na tela */}
        {erro && <p className="text-red-600 font-bold bg-red-50 p-2 rounded">{erro}</p>}

        {/* Ex 13: Botão desabilitado */}
        <button
          type="submit"
          disabled={form.nome === ""}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Matricular Aluno
        </button>
      </form>

      {/* Ex 14, 19: Lista e Contador */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-slate-800">
          Turma ({turma.length} alunos matriculados)
        </h3>
        <ul className="mt-4 space-y-2">
          {turma.map((aluno) => (
            <li key={aluno.id} className="p-3 border rounded-lg bg-slate-50 flex justify-between items-center">
              <span>
                <strong>{aluno.nome}</strong> — {aluno.curso} 
                <span className="text-sm text-slate-600 ml-2"> (Nota: {aluno.nota})</span>
                {aluno.bolsista && <span className="ml-2 text-yellow-600 font-bold">🌟 Bolsista</span>}
              </span>
            </li>
          ))}
          {turma.length === 0 && <p className="text-slate-500">Nenhum aluno matriculado ainda.</p>}
        </ul>
      </div>
    </div>
  );
}