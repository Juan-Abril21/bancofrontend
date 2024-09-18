import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
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
import { useState } from "react";
import { ButtonLoading } from "@/components/ButtonLoading"; // Componente de botón con carga

const AlertaW2Buttons = ({
  TextoBoton,
  Dialogo,
  path1,
  Descripcion,
  alertButton1,
  path2,
  alertButton2,
  click,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Estado de visibilidad de la alerta
  const [loadingDelete, setLoadingDelete] = useState(false); // Estado de carga para el botón "Eliminar"

  const handleVolver = () => {
    setIsOpen(false);
  };

  const handleEliminarClick = async () => {
    setLoadingDelete(true); // Activar estado de carga
    await click(); // Llamar a la función de eliminación pasada como prop
    setLoadingDelete(false); // Desactivar estado de carga
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>{TextoBoton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="AlertDialogContent">
        <AlertDialogHeader>
          <AlertDialogTitle>{Dialogo}</AlertDialogTitle>
          <AlertDialogDescription>{Descripcion}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* Verificar si el botón está en estado de carga */}
          {loadingDelete ? (
            <ButtonLoading className="boton1" />
          ) : (
            <AlertDialogAction className="boton1">
              <Link href={path1} onClick={handleEliminarClick}>
                {alertButton1}
              </Link>
            </AlertDialogAction>
          )}
          <AlertDialogAction className="boton2">
            <Link onClick={handleVolver} href={path2}>
              {alertButton2}
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertaW2Buttons;
