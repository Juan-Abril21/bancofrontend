import Link from "next/link";
import { Button } from "@/components/ui/button";
import '@/Styles/cedulaCliente.css';
import { InputWithLabel } from "@/components/Input";
import { InputWithLabelDisabled } from "@/components/InputDisabled";
import Alerta from "@/components/Alerta.jsx";
import { InputWithButton } from "@/components/InputWithButton";

var Nombre = "Juan Abril";

export default function crearCliente() {
  return (
    <main>
      <div className="formularioCedula">
        <InputWithButton placeHolder = "Cedula" buttonMessage="Verificar" nombre="Cedula"/>
        <InputWithLabelDisabled dato = "Nombre" nombre={Nombre} type = {"id"} />
        <Alerta TextoBoton={"Crear"} Dialogo={"Cliente creado con exito"} path={"/"} Descripcion={"Nombre: \nApellido:"}/>
      </div>
    </main>
  );
}
