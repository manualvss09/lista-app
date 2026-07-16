import CardAluno from "@/components/CardAluno";
import Header from "@/components/HeaderTurma";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";


export default function Home() {
  return (
    <div>
     <Header/>
     <Titulo/>
     <div className="flex gap-6">
        <CardAluno/>
        <CardAluno/>
        <CardAluno/>
     </div>
     <div>
      <h2 className="text-xl font-bold text-green-400">Turma 2026</h2>
    </div>
    <div>
      <h1 className="text-xl font-bold text-green-300">Mural da turma</h1>
      <h5>Ana Carolina</h5>
      <h5>Manuella</h5>
      <h5>Pedro</h5>
      <h5>Elisa</h5>
    </div>
     <div>
      <Rodape/>
      </div>
    </div>
  
  );
}
