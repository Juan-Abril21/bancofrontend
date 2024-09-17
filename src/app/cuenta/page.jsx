"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/Input";
import "@/styles/cuenta.css";
import { useRouter } from "next/navigation";
import { InputWithLabelDisabled } from "@/components/InputDisabled";
import Link from "next/link";
import { InputWithButton } from "@/components/InputWithButton";

export default function Cuenta() {
  const [inputsVisibles, setInputsVisibles] = useState(false);
  const router = useRouter();

  const verificarCedula = () => {
    const cedulaExiste = true;
    if (cedulaExiste) {
      setInputsVisibles(true);
    } else {
      router.push("/crearCliente");
    }
  };

  return (
    <main>
      <>
      <section className="nav">
        <h1 className="titulo">Crear cuenta</h1>
      </section>
      <div className="formularioCedula">
        <InputWithLabel nombre={"Cédula"} type={"number"} nombreLabel={"Cedula"}/>
        <Button onClick={verificarCedula}>Verificar</Button>
        {inputsVisibles && (
          <>
            <InputWithButton nombre = "Nombre" placeHolder="Juan" buttonMessage="Continuar"></InputWithButton>
          </>
        )}
      </div>
      </>
    </main>
  );
}
