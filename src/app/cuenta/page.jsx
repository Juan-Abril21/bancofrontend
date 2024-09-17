"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/Input";
import "@/Styles/cuenta.css";
import { useRouter } from "next/navigation";
import { InputWithLabelDisabled } from "@/components/InputDisabled";
import Link from "next/link";
import { InputWithButton } from "@/components/InputWithButton";

export default function Cuenta() {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [inputsVisibles, setInputsVisibles] = useState(false);
  const router = useRouter();
  const [cuentaCreada, setCuentaCreada] = useState(null);

  const handleCrear = () => {
    const cuenta = {
      nombre: nombre,
      cedula: cedula,
    };
    setCuentaCreada(cuenta);
  };

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
        <InputWithLabel nombre={"Cedula"} type={"number"} nombreLabel={"Cedula"} value={cedula}
            onChange={(e) => setCedula(e.target.value)}/>
        <Button onClick={verificarCedula}>Verificar</Button>
        {inputsVisibles && (
          <>
            <InputWithButton nombre={"Nombre"} type={""} nombreLabel={"Nombre"} value={nombre}
            onChange={(e) => setNombre(e.target.value)} click={handleCrear} buttonMessage={"Crear"}></InputWithButton>
          </>
        )}
        
        <Button className="volver">
          <Link href="/">Volver</Link>
        </Button>
      </div>
      </>
    </main>
  );
}
