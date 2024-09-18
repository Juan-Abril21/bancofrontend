"use client";
import "@/Styles/crearCliente.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Alerta from "@/components/Alerta.jsx";
import { InputWithLabel } from "@/components/Input.jsx";
import { postCliente } from "../peticiones/crearCliente";

export default function CrearCliente() {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");

  const [clienteRegistrado, setClienteRegistrado] = useState([]);

  const handleRegistrar = () => {
    const cliente = {
      nombre: nombre,
      cedula: cedula,
    };
    setClienteRegistrado(cliente);
    postCliente(cliente);
  };

  return (
    <main>
      <>
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
            path={"/"}
            alertButton={"Aceptar"}
            click={handleRegistrar}
          />
          <Button className="volver">
            <Link href="/">Volver</Link>
          </Button>
        </div>
      </>
    </main>
  );
}
