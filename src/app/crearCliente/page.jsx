
import "@/Styles/crearCliente.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Alerta from "@/components/Alerta.jsx";
import { Input } from "@/components/ui/Input.jsx"
import { InputWithLabel } from "@/components/Input";


export default function crearCliente() {
  return (
    <main>
      <>
      <section className="nav">
        <h1 className="titulo">Crear Cliente</h1>
      </section>
      <div className="formulario">
        <InputWithLabel nombre={"Nombre"} type = {"fname"}/>
        <InputWithLabel nombre={"Cedula"} type={"number"}/>
        <Alerta TextoBoton={"Registrarse"} Dialogo={"Cliente creado con exito"} path={"/"}/>
      </div>
      </>
    </main>
  );
}
