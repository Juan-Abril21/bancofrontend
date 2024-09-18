"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithLabel } from "@/components/Input";
import "@/Styles/cuenta.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { InputWithButton } from "@/components/InputWithButton";
import { postCuenta } from "../peticiones/crearCuenta";
import { getCliente } from "../peticiones/getCliente";
import { ButtonLoading } from "@/components/ButtonLoading";

export default function Cuenta() {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [inputsVisibles, setInputsVisibles] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false); 
  const [isCreating, setIsCreating] = useState(false); 
  const router = useRouter();
  const [cuentaCreada, setCuentaCreada] = useState(null);

  const handleCrear = async () => {
    const cuenta = {
      nombre: nombre,
      cedula: cedula,
    };
    setCuentaCreada(cuenta);
    setIsCreating(true); 

    try {
      await postCuenta(cedula);
      setIsCreating(false); 
    } catch (error) {
      console.error("Error al crear cuenta:", error);
      setIsCreating(false); 
    }
  };

  const verificarCedula = async () => {
    setIsVerifying(true); 
    try {
      const cliente = await getCliente(cedula);
      if (cliente) {
        setNombre(cliente.nombre);
        setInputsVisibles(true);
      } else {
        router.push("/crearCliente");
      }
    } catch (error) {
      console.error("Error al verificar cédula:", error);
    } finally {
      setIsVerifying(false); 
    }
  };

  return (
    <main>
      <>
        <section className="nav">
          <h1 className="titulo">Crear cuenta</h1>
        </section>
        <div className="formularioCedula">
          <InputWithLabel
            nombre={"Cedula"}
            type={"number"}
            nombreLabel={"Cedula"}
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />

          {isVerifying ? (
            <ButtonLoading /> 
          ) : (
            <Button onClick={verificarCedula}>Verificar</Button>
          )}

          {inputsVisibles && (
            <>
              <InputWithButton
                nombre={"Nombre"}
                type={""}
                nombreLabel={"Nombre"}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                click={handleCrear}
                buttonMessage={isCreating ? <ButtonLoading /> : "Crear"} 
              />
            </>
          )}

          <Button asChild className="volver">
            <Link href="/">Volver</Link>
          </Button>
        </div>
      </>
    </main>
  );
}
