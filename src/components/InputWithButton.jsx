import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import Link from "next/link";

export function InputWithButton({ nombre, placeHolder, buttonMessage }) {
  return (
    <div className="w-full max-w-sm">
      <div className="grid w-full gap-1.5">
        <Label>{nombre}</Label>
        <div className="flex items-center space-x-2">
          <Input disabled placeholder={placeHolder} />
          <Button type="submit"><Link href="/">{buttonMessage}</Link></Button>
        </div>
      </div>
    </div>
  );
}
