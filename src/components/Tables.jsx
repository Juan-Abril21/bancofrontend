"use client";
import { useState } from "react";
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

const invoices = [
  {
    ID: "1",
    cedula: "123131",
    nombre: "Juan",
    saldo: "$100.00",
    fechaCreacion: "2021-12-01",
  },
  {
    ID: "2",
    cedula: "234241",
    nombre: "Jose",
    saldo: "$200.00",
    fechaCreacion: "2021-12-02",
  },
  {
    ID: "3",
    cedula: "235435",
    nombre: "Julian",
    saldo: "$300.00",
    fechaCreacion: "2021-12-03",
  },
  {
    ID: "4",
    cedula: "25654",
    nombre: "Bryam",
    saldo: "$400.00",
    fechaCreacion: "2021-12-04",
  },
  {
    ID: "5",
    cedula: "769878696",
    nombre: "Bartolo",
    saldo: "$500.00",
    fechaCreacion: "2021-12-05",
  },
  {
    ID: "6",
    cedula: "3563",
    nombre: "Andres",
    saldo: "$600.00",
    fechaCreacion: "2021-12-06",
  },
  {
    ID: "7",
    cedula: "3645646",
    nombre: "Sofia",
    saldo: "$700.00",
    fechaCreacion: "2021-12-07",
  },
];

export function Tables() {
  const [searchCedula, setSearchCedula] = useState(""); 
  const filteredInvoices = invoices.filter((invoice) =>
    invoice.cedula.includes(searchCedula)
  );

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
            <TableHead>ID</TableHead>
            <TableHead>Cedula</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Saldo</TableHead>
            <TableHead>Fecha creacion</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice) => (
              <TableRow key={invoice.ID}>
                <TableCell className="font-medium">{invoice.ID}</TableCell>
                <TableCell>{invoice.cedula}</TableCell>
                <TableCell>{invoice.nombre}</TableCell>
                <TableCell>{invoice.saldo}</TableCell>
                <TableCell>{invoice.fechaCreacion}</TableCell>
                <TableCell className="text-right">
                  <AlertaW2Buttons
                    Descripcion={`ID de la cuenta: ${invoice.ID}`} 
                    TextoBoton={"Eliminar"} 
                    Dialogo={`¿Está seguro que quiere eliminar la cuenta?`}
                    path1={"/"} 
                    alertButton1={"Eliminar"}
                    path2={"/"}
                    alertButton2={"Volver"}
                  />
                  <Button>
                    <Link href="/depositar">Depositar</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No se encontraron resultados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
