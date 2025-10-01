import { type UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormFieldProps
  extends React.HTMLAttributes<HTMLInputElement> {
  fieldRegister: UseFormRegisterReturn;
  error?: string;
}

export function InputText(props: FormFieldProps) {
  const { fieldRegister, error, ...restProps } = props;

  return (
    <div>
      <Input
        type="text"
        {...restProps}
        {...fieldRegister}
      />
      {error && <p className="text-sm pt-1.5 text-red-700">{error}</p>}
    </div>
  );
}