"use client";
import { useSearchParams, useRouter } from "next/navigation"; 
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/Styles/App.css";
import { InputWithLabel } from "@/components/Input";
import Alerta from "@/components/Alerta.jsx";
import { Deposito } from "../peticiones/hacerDeposito";
import { ButtonLoading } from "@/components/ButtonLoading"; 

function DepositarContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [monto, setMonto] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter(); 

  const handleDeposito = async () => {
    if (!monto || isNaN(parseFloat(monto))) {
      alert("Por favor, ingrese un monto válido");
      return;
    }
    setLoading(true); 
    const data = {
      id: id,
      monto: parseFloat(monto),
    };
    await Deposito(data);
    setLoading(false); 
    router.push("/cuentas"); 
  };

  return (
    <main>
      <section className="nav">
        <h1 className="titulo">Depósito</h1>
      </section>
      <div className="formulario">
        <InputWithLabel
          nombre="Monto"
          type="number"
          nombreLabel="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
        {loading ? (
          <ButtonLoading />
        ) : (
          <Alerta
            TextoBoton="Depositar"
            Dialogo="Depósito realizado con éxito"
            path="/"
            alertButton="Aceptar"
            click={handleDeposito}
          />
        )}
        <Button className="volver">
          <Link href="/cuentas">Volver</Link>
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
