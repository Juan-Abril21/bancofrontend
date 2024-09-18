"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import "@/Styles/tables.css";
import Link from "next/link";
import AlertaW2Buttons from "@/components/AlertaW2Buttons.jsx";
import { getClientes } from "@/app/peticiones/getClientes";
import { eliminarCuenta } from "@/app/peticiones/eliminarCuenta";

export function Tables() {
  const [searchCedula, setSearchCedula] = useState("");
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      const data = await getClientes();
      setClientes(data);
    };
    fetchClientes();
  }, []);

  const filteredInvoices = clientes.filter((invoice) =>
    invoice.cedula.includes(searchCedula)
  );
  const handleEliminarCuenta= async (id) => {
    await eliminarCuenta(id);
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          id="search"
          value={searchCedula}
          onChange={(e) => setSearchCedula(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Ingrese el número de cédula"
        />
      </div>
      <Table>
        <TableCaption>Cuentas activas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID Cliente</TableHead>
            <TableHead>ID Cuenta</TableHead>
            <TableHead>Cedula</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Saldo</TableHead>
            <TableHead>Fecha creacion</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow key={`${invoice.ID}-${invoice.cuentaId}`}>
              <TableCell className="font-medium">{invoice.ID}</TableCell>
              <TableCell>{invoice.cuentaId}</TableCell>
              <TableCell>{invoice.cedula}</TableCell>
              <TableCell>{invoice.nombre}</TableCell>
              <TableCell>{invoice.saldo}</TableCell>
              <TableCell>{invoice.fechaCreacion}</TableCell>
              <TableCell className="text-right">
                <AlertaW2Buttons
                  Descripcion={`ID de la cuenta: ${invoice.ID}`} 
                  click={()=>handleEliminarCuenta(invoice.cuentaId)}
                  TextoBoton={"Eliminar"} 
                  Dialogo={`¿Está seguro que quiere eliminar la cuenta?`}
                  path1={"/"} 
                  alertButton1={"Eliminar"}
                  path2={"/cuentas"}  
                  alertButton2={"Volver"}
                />
                <Button>
                  <Link href={`/depositar?id=${invoice.cuentaId}`}>Depositar</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
