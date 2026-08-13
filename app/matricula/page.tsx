import Header from "@/components/HeaderTurma";
import Rodape from "@/components/Rodape";
import PageContainer from "@/components/PageContainer";
import MatriculaCompleta from "@/components/MatriculaC";

export default function MatriculaPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header />
      <PageContainer>
        <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-200/70 backdrop-blur">
          <h2 className="text-2xl font-semibold text-slate-900">Matrícula</h2>
          <p className="mt-2 text-sm text-slate-600">Faça a matrícula de novos alunos.</p>
        </section>

        <div>
          <MatriculaCompleta />
        </div>
      </PageContainer>

      <Rodape />
    </main>
  );
}
