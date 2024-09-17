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
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import Link from "next/link";
  import '../Styles/crearCliente.css'

const Alerta = ({TextoBoton, Dialogo, path, Descripcion, alertButton, click}) => {
    return (
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={click}>{TextoBoton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className ="AlertDialogContent">
        <AlertDialogHeader>
          <AlertDialogTitle>{Dialogo}</AlertDialogTitle>
          <AlertDialogDescription>
            {Descripcion}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <AlertDialogAction><Link href={path}>{alertButton}</Link></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    )
}
export default Alerta;