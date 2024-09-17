"use client";
import "@/Styles/crearCliente.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Alerta from "@/components/Alerta.jsx";
import { Input } from "@/components/ui/Input.jsx"
import { InputWithLabel } from "@/components/Input";
import { useEffect, useState } from "react";
import { postCliente } from "../peticiones/crearCliente";


export default function CrearCliente() {
  const [clientes, setClientes] = useState({
    nombre: "Jose",
    cedula: 1110000000,
  });
  console.log(clientes);
  useEffect(() => {
    postCliente(clientes);
  }, [clientes]);

  return (
    <main>
      <>
      <section className="nav">
        <h1 className="titulo">Crear Cliente</h1>
      </section>
      <div className="formulario">
        <InputWithLabel nombre={"Nombre"} type = {"fname"} nombreLabel={"Nombre"}/>
        <InputWithLabel nombre={"Cedula"} type={"number"} nombreLabel={"Cedula"}/>
        <Alerta TextoBoton={"Registrarse"} Dialogo={"Cliente creado con exito"} path={"/"}/>
      </div>
      </>
    </main>
  );
}
