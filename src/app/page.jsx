"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { ButtonLoading } from "@/components/ButtonLoading";
import "../Styles/App.css";

export default function App() {
  const router = useRouter();
  const [loadingButton, setLoadingButton] = useState("");

  const handleClick = (buttonName, redirectUrl) => {
    setLoadingButton(buttonName);
    router.push(redirectUrl);
  };

  return (
    <>
      <section className="nav">
        <h1 className="titulo">Banco Fachero</h1>
      </section>
      <div className="botones">
        {loadingButton === "crearCliente" ? (
          <ButtonLoading />
        ) : (
          <Button onClick={() => handleClick("crearCliente", "/CrearCliente")}>
            Crear cliente
          </Button>
        )}

        {loadingButton === "crearCuenta" ? (
          <ButtonLoading />
        ) : (
          <Button onClick={() => handleClick("crearCuenta", "/cuenta")}>
            Crear cuenta
          </Button>
        )}

        {loadingButton === "consultarCuentas" ? (
          <ButtonLoading />
        ) : (
          <Button onClick={() => handleClick("consultarCuentas", "/cuentas")}>
            Consulta de cuentas
          </Button>
        )}

        <p className="explicacion">
          Profe, toca esperar a que el servidor que aloja el back inicie para
          poder recibir peticiones. Esto porque usamos la capa gratis de Render.
        </p>
      </div>
    </>
  );
}
