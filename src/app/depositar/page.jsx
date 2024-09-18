"use client";
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/Styles/App.css";
import { InputWithLabel } from "@/components/Input";
import Alerta from "@/components/Alerta.jsx";
import { Deposito } from "../peticiones/hacerDeposito";

function DepositarContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [monto, setMonto] = useState('');

  const handleDeposito = async () => {
    if (!monto || isNaN(parseFloat(monto))) {
      alert('Por favor, ingrese un monto válido');
      return;
    }
    const data = {
      id: id,
      monto: parseFloat(monto),
    };
    await Deposito(data);
  };

  return (
    <main>
      <section className="nav">
        <h1 className="titulo">Depósito</h1>
      </section>
      <div className="formulario">
        <InputWithLabel 
          nombre="monto" 
          type="number" 
          nombreLabel="Monto" 
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        <Alerta 
          TextoBoton="Depositar" 
          Dialogo="Depósito realizado con éxito" 
          path="/" 
          alertButton="Aceptar"
          click={handleDeposito}
        />
        <Button className="volver">
          <Link href="/">Volver</Link>
        </Button>
      </div>
    </main>
  );
}

export default function Depositar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DepositarContent />
    </Suspense>
  );
}