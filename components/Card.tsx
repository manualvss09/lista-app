type CardProps = {
  nome: string;
  cargo: string;
};

export default function Card({ nome, cargo }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">Perfil</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{nome}</h3>
      <p className="mt-2 text-sm text-slate-600">{cargo}</p>
    </article>
  );
}