"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";
import { ButtonLoading } from "@/components/ButtonLoading";
import "../Styles/App.css";
import Image from "next/image";

export default function App() {
  const router = useRouter();
  const [loadingButton, setLoadingButton] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (buttonName, redirectUrl) => {
    setLoadingButton(buttonName);
    router.push(redirectUrl);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <section className="nav">
        <h1 className="titulo">Banco Fachero</h1>
      </section>
      <div className="theme-toggle" onClick={toggleTheme}>
        <Image
          src={darkMode ? "/light-mode-icon.png" : "/dark-mode-icon.png"}
          alt="Toggle Theme"
          width={40}
          height={40}
        />
      </div>
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
