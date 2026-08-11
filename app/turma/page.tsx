import Card from "@/components/Card";
import CardAluno from "@/components/CardAluno";
import Header from "@/components/HeaderTurma";
import ListaMap from "@/components/ListaMap";
import Rodape from "@/components/Rodape";
import ListaGenerica from "@/components/ListaGenerica";
import TabelaAlunos from "@/components/TabelaAlunos";
import Contador from "@/components/Contador";

export default function Home() {
  const alunosTeste = [
    { id: 101, nome: "Lina Ana", curso: "Engenharia de Software" },
    { id: 102, nome: "João Silva", curso: "Ciência da Computação" },
    { id: 103, nome: "Maria Santos", curso: "Sistemas de Informação" },
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <Header />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-200/70 backdrop-blur">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Turma</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Visualização organizada dos principais componentes</h2>
            </div>
            <div className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">Next.js + React</div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Aluno destaque</h3>
            <div className="mt-4 space-y-4">
              <Card nome="Lina Ana" cargo="Engenheira de Software" />
              <CardAluno nome="Lina Ana" cargo="Engenheira de Software" periodo="2024.1" ativo={true} vip={true} habilidades={["React", "Next.js", "TypeScript"]} presenca={true} />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Mural da turma</h3>
            <div className="mt-4">
              <Contador />
            </div>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Lista da turma</h3>
            <div className="mt-4">
              <ListaMap />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Habilidades do curso</h3>
            <div className="mt-4">
              <ListaGenerica titulo="Frontend" itens={["React", "Next.js", "TypeScript"]} />
            </div>
          </section>
        </div>

        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
          <h3 className="text-lg font-semibold text-slate-900">Tabela de Alunos</h3>
          <div className="mt-4">
            <TabelaAlunos alunos={alunosTeste} />
          </div>
        </section>
      </div>

      <Rodape />
    </main>
  );
}