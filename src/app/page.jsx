import Link from "next/link"
import { Button } from "../components/ui/button"
import "../Styles/App.css"

export default function App() {
  return (
    <div className="landpage">
      <section className="nav">
      <h1 className="titulo">Banco Fachero</h1>
      </section>
      <div className="botones">
    <Button asChild><Link href="/CrearCLiente">Crear cliente</Link></Button>
    <Button asChild><Link href="/CrearCuenta">Crear cuenta</Link></Button>
    <Button asChild><Link href="/ConsultaCuentas">Consulta de cuentas</Link></Button>
    <Button asChild><Link href="/Deposito">Realizar deposito</Link></Button>
    </div>
    </div>
  )
}