
import Header from "@/components/HeaderTurma";
import ListaMap from "@/components/ListaMap";
import Rodape from "@/components/Rodape";
import ListaGenerica from "@/components/ListaGenerica";
import TabelaAlunos from "@/components/TabelaAlunos";
import Contador from "@/components/Contador";
import Card from "@/components/Card";
import CardAluno from "@/components/CardAluno";
import Toggle from "@/components/Toggle";
import Saudacao from "@/components/Saudacao";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";

export default function Home() {
  const alunosTeste = [
    { id: 101, nome: "Lina Ana", curso: "Engenharia de Software" },
    { id: 102, nome: "Manu Alves", curso: "Ciência da Computação" },
    { id: 103, nome: "Pedro Kawakami", curso: "Sistemas de Informação" },
  ];

  return (
    <main className="min-h-screen bg-transparent">
      <Header />

      <PageContainer>
        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-200/70 backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">Painel da turma</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">Turma </h2>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Perfil e aluno destaque</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card nome="Lina Ana" cargo="Engenheira de Software" />
              <CardAluno nome="Lina Ana" cargo="Engenheira de Software" periodo="2024.1" ativo={true} vip={true} habilidades={["React", "Next.js", "TypeScript"]} presenca={true} />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Interações rápidas</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <Toggle />
              <Saudacao nome="Ana" />
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Input />
            </div>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Mural da turma</h3>
            <p className="mt-2 text-sm text-slate-600">Lista organizada com os nomes da turma.</p>
            <div className="mt-4">
              <ListaMap />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Lista Genérica</h3>
            <div className="mt-4">
              <ListaGenerica titulo="Frontend" itens={["React", "Next.js", "TypeScript"]} />
            </div>
          </section>
        </div>

        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Tabela de Alunos</h3>
              <p className="mt-2 text-sm text-slate-600">Dados da turma em formato de tabela com destaque visual.</p>
            </div>
            <div className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">11 alunos ativos</div>
          </div>
          <div className="mt-4">
            <TabelaAlunos alunos={alunosTeste} />
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
          <Contador alunosMatriculados={11} />
        </section>
      </PageContainer>

      <Rodape />
    </main>
  );
}