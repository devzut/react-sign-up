import { type UseFormRegisterReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FormFieldProps 
  extends React.HTMLAttributes<HTMLInputElement> {
  fieldRegister: UseFormRegisterReturn;
  error?: string;
}

export function InputPassword(props: FormFieldProps) {

  const { fieldRegister, error, ...restProps } = props;
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input 
        type={visible ? "text": "password"}
        {...restProps} 
        {...fieldRegister} 
      />
      <div onClick={() => setVisible(!visible)} className="eye-icon">
        { visible 
          ? <Eye className="w-4 h-4 text-gray-700" /> 
          : <EyeOff className="w-4 h-4 text-gray-700" />
        }
      </div>
      {error && <p className="text-sm pt-1.5 text-red-700">{error}</p>}
    </div>
  );
}
