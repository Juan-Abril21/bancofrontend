"use client";
import { Tables } from "@/components/Tables.jsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/Styles/cuentas.css";
import { useState } from "react";


export default function Cuentas() {
  const [filteredData, setFilteredData] = useState(null);
  const handleSearch = (cedula) => {
    const result = invoices.filter((invoice) => invoice.cedula.includes(cedula));
    setFilteredData(result);
  };
  return (
    <main>
      <>
      <section className="nav">
        <h1 className="titulo">Cuentas</h1>
      </section>
        <Tables />
        <div className="boton">
        <Button asChild>
          <Link href="/">Volver</Link>
        </Button>
      </div>
      </>
    </main>
  );
}
