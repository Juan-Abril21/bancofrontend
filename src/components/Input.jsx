import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel({type, nombre}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{nombre}</Label>
      <Input type={type} id={type} placeholder={nombre}/>
    </div>
  )
}
