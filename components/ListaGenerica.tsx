type Props = {
  titulo: string;
  itens: string[];
};

export default function ListaGenerica({ titulo, itens }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-lg">✨</span>
        <h3 className="text-lg font-semibold text-slate-900">{titulo}</h3>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {itens.map((item) => (
          <li key={item} className="rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}