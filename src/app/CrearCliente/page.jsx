"use client";
import "@/Styles/crearCliente.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Alerta from "@/components/Alerta.jsx";
import { InputWithLabel } from "@/components/Input.jsx";
import { postCliente } from "../peticiones/crearCliente";
import { ButtonLoading } from "@/components/ButtonLoading"; // Importar el botón de carga

export default function CrearCliente() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [clienteRegistrado, setClienteRegistrado] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Estado para el botón de carga

  const handleRegistrar = async () => {
    const cliente = {
      nombre: nombre,
      cedula: cedula,
    };

    setClienteRegistrado(cliente);
    setIsLoading(true); // Mostrar el botón de carga cuando se presiona "Aceptar"

    try {
      await postCliente(cliente); // Espera a que el cliente sea registrado
      window.location.href = "/"; // Redirige una vez completado el registro
    } catch (error) {
      console.error("Error al registrar cliente:", error);
      setIsLoading(false); 
    }
  };

  return (
    <main>
      <section className="nav">
        <h1 className="titulo">Crear Cliente</h1>
      </section>
      <div className="formulario">
        <InputWithLabel
          nombre={"Nombre"}
          type={"text"}
          nombreLabel={"Nombre"}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <InputWithLabel
          nombre={"Cedula"}
          type={"number"}
          nombreLabel={"Cedula"}
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />

        <Alerta
          TextoBoton={"Registrarse"}
          Dialogo={"Cliente creado con éxito"}
          Descripcion={"El cliente ha sido registrado correctamente."}
          alertButton={isLoading ? <ButtonLoading /> : "Aceptar"}
          click={handleRegistrar} 
          path={"/"} 
        />

        <Button asChild className="volver">
          <Link href="/">Volver</Link>
        </Button>
      </div>
    </main>
  );
}
