export default function CardAluno(){
    const nome = "Daniel Guimarães";
    const aluno ="Manuella";
    const curso ="Front-end.";
    return(
        <div>    
        {`${ aluno } ${curso}`}
        <p>Nota final: {8 + 1}</p>
        {nome}
        <div className="bg-green-500 rounded-2x1 p-6 shadow-lg text-blue-400 font-bold ">Manuella</div>
        </div >    
    );
}