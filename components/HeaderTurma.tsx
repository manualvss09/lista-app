import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            Turma Front-end
          </h1>
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="text-slate-600 dark:text-slate-300 font-medium hover:text-rose-500 dark:hover:text-rose-400 transition-colors relative group">
            Início
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/turma" className="text-slate-600 dark:text-slate-300 font-medium hover:text-rose-500 dark:hover:text-rose-400 transition-colors relative group">
            Turma
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/matricula" className="text-slate-600 dark:text-slate-300 font-medium hover:text-rose-500 dark:hover:text-rose-400 transition-colors relative group">
            Matrícula
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}