import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const signInForm = z.object({
  email: z.string().email().nonempty("Campo necessário"),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    console.log("Data", data);
    toast.success("Enviando email de autenticação para o seu email ...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <Button asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Cadastro</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
            </div>
            <Button disabled={isSubmitting} className="w-full">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
