type Aluno = { id: number; nome: string; curso: string };

type Props = {
  alunos: Aluno[];
};

export default function TabelaAlunos({ alunos }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Nome</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Curso</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {alunos.map((aluno) => (
            <tr key={aluno.id} className="transition hover:bg-slate-50">
              <td className="px-4 py-3 text-sm text-slate-600">{aluno.id}</td>
              <td className="px-4 py-3 text-sm font-medium text-slate-800">{aluno.nome}</td>
              <td className="px-4 py-3 text-sm text-slate-600">{aluno.curso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}