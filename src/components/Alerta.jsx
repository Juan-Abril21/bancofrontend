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

const alterta = ({TextoBoton, Dialogo, path, Descripcion}) => {
    return (
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>{TextoBoton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className ="AlertDialogContent">
        <AlertDialogHeader>
          <AlertDialogTitle>{Dialogo}</AlertDialogTitle>
          <AlertDialogDescription>
            {Descripcion}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction><Link href={path}>Continuar</Link></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    )
}
export default alterta;