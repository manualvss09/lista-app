"use client"
import { useState } from "react";

export default function Style(){
  const [cor, setCor] = useState<string>("#55C8E6");

  return (
    <div>
      <button onClick={() => setCor("#FF0000")}>
        Trocar cor
      </button>

      <div
        style={{
          backgroundColor: cor,
          width: "200px",
          height: "100px",
        }}
      >
      </div>
    </div>
   );
}