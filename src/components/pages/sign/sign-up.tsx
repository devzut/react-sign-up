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
import { createUser } from "@/components/pages/sign/services/create";
import { type CreateUserData } from "@/components/pages/sign/services/create";
import { InputPassword } from "@/components/forms/input-password";

interface UserFormInput {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),

    fullName: z
      .string()
      .min(3, { message: "Full name must be at least 3 characters long." })
      .max(80, { message: "Full name must not exceed 80 characters." })
      .regex(/^[a-zA-Z\s.'-]+$/, {
        message:
          "Full name can only contain letters, spaces, apostrophes, hyphens, and periods.",
      })
      .refine((name) => name.split(" ").filter(Boolean).length >= 2, {
        message: "Full name must contain at least two words.",
      }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function SignUp() {
  const onSubmit = async (data: CreateUserData) => {
    console.log("Sending data to the API:", data);
    await createUser(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInput>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <Card className="w-70">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <form
            className="flex flex-col gap-6 w-full justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="">
              <Label className="pb-2" htmlFor="fullName">
                Full Name:
              </Label>
              <InputText
                className="rounded-lg"
                id="fullName"
                fieldRegister={register("fullName")}
                error={errors.fullName?.message}
              />
            </div>
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
            <div className="">
              <Label className="pb-2" htmlFor="password">
                Password:
              </Label>
              <InputPassword
                className="rounded-lg"
                id="password"
                fieldRegister={register("password")}
                error={errors.email?.message}
              />
            </div>
            <div className="">
              <Label className="pb-2" htmlFor="confirmPassword">
                Confirm Password:
              </Label>
              <InputPassword
                className="rounded-lg"
                id="confirmPassword"
                fieldRegister={register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
            </div>
            <div>
              <Button type="submit" className="w-full rounded-lg">
                Create
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p className="text-sm pt-1.5">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-(--primary)">Sign In</span>
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
