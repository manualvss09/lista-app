type ListaMapProps = {
  nomes?: string[];
};

export default function ListaMap({ nomes }: ListaMapProps) {
  const lista = nomes ?? ["Ana", "Manuella", "Pedro"];

  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {lista.map((nome) => (
        <li key={nome} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm">
          {nome}
        </li>
      ))}
    </ul>
  );
}