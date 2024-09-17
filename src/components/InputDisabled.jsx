import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabelDisabled({type, dato, nombre}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{dato}</Label>
      <Input disabled type={type} id={type} placeholder={nombre} />
    </div>
  )
}
