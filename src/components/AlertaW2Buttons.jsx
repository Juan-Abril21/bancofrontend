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

const alterta = ({TextoBoton, Dialogo, path1, Descripcion, alertButton1, path2, alertButton2}) => {
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
        <AlertDialogAction><Link href={path1}>{alertButton1}</Link></AlertDialogAction>
          <AlertDialogAction><Link href={path2}>{alertButton2}</Link></AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    )
}
export default alterta;