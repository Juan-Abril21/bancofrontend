import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import '../Styles/crearCliente.css';

const Alerta = ({ TextoBoton, Dialogo, path, Descripcion, alertButton, click }) => {
  const handleClick = async () => {
    await click(); // Ejecuta la función de registrar cuando se hace clic en "Aceptar"
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>{TextoBoton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="AlertDialogContent">
        <AlertDialogHeader>
          <AlertDialogTitle>{Dialogo}</AlertDialogTitle>
          <AlertDialogDescription>
            {Descripcion}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleClick}>
            {alertButton}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alerta;
  