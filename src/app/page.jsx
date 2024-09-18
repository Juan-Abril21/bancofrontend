import Link from "next/link";
import { Button } from "../components/ui/button";
import "../Styles/App.css";


export default function App() {
  return (
    <>
      <section className="nav">
        <h1 className="titulo">Banco Fachero</h1>
      </section>
      <div className="botones">
        <Button asChild>
          <Link href="/CrearCliente">Crear cliente</Link>
        </Button>
        <Button asChild>
          <Link href="/cuenta">Crear cuenta</Link>
        </Button>
        <Button asChild>
          <Link href="/cuentas">Consulta de cuentas</Link>
        </Button>
      
      </div>
      </>
  );
}
