export default function Header(){
    return(
        <header className="bg-green-200 rounded-2x1 p-6 shadow-lg text-blue-300 font-bold">
        <b>Turma Front-end</b>
        <nav className="flex gap-4">
          <a href="/">Início</a>
          <a href="/turma">Turma</a>
        </nav>
      </header>
    );

}