"use client"

import { useState } from "react"

export default function Toggle(){
        const [ligado, setLigado] = useState<boolean>(false);
        const [mostrar, setMostrar] = useState<boolean>(false);
        const [presenca, setPresente] = useState<boolean>(false);

        const btnClass = (active: boolean) =>
            `px-3 py-1.5 rounded-md text-sm font-medium transition ${active ? 'bg-cyan-600 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`;

        return(
            <div className="flex flex-wrap gap-2">
                <button className={btnClass(ligado)} onClick={() => setLigado(!ligado)}>
                    {ligado ? "Ligado" : "Desligado"}
                </button>

                <button className={btnClass(mostrar)} onClick={() => setMostrar(!mostrar)}>
                    {mostrar ? "Mostrar" : "Esconder"}
                </button>

                <button className={btnClass(presenca)} onClick={() => setPresente(!presenca)}>
                    {presenca ? "Presente" : "Ausente"}
                </button>
            </div>
        )
}