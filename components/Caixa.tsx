type CaixaProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Caixa({ children, className = "" }: CaixaProps) {
  return <div className={`${className} p-4 border rounded-lg`}>{children}</div>;
}

