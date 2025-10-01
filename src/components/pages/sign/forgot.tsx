import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InputText } from "@/components/forms/input-text";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPassword } from "@/components/pages/sign/services/forgot";
import { type ForgotPasswordData } from "@/components/pages/sign/services/forgot";

const validationSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
  })
  .required();

export function Forgot() {
  const onSubmit = async (data: ForgotPasswordData) => {
    console.log("Sending data to the API:", data);
    await forgotPassword(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <Card className="w-70">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Remind Password</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <form
            className="flex flex-col gap-6 w-full justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="">
              <Label className="pb-2" htmlFor="email">
                Email:
              </Label>
              <InputText
                className="rounded-lg"
                id="email"
                fieldRegister={register("email")}
                error={errors.email?.message}
              />
            </div>
            <div>
              <Button type="submit" className="w-full rounded-lg">
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p className="text-sm pt-1.5">
          Don't have account?{" "}
          <Link to="/create">
            <span className="text-(--primary)">Sign Up</span>
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
