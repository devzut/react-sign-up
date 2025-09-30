import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUp() {
  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                className="rounded-lg"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password:</Label>
              <Input
                className="rounded-lg"
                id="password"
                type="password"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full rounded-none">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
