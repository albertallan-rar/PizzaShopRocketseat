import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log("Data", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch {
      toast.error("Erro ao cadastras o restaurante");
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <Button asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um afiliado a plataforma e melhore as suas vendas
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName" className="text-sm font-medium">
                Nome do restaurante
              </Label>
              <Input
                id="restaurantName"
                type="text"
                placeholder="Digite o nome do restaurante"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label id="managerName" className="text-sm font-medium">
                Nome do gerente
              </Label>
              <Input
                id="managerName"
                type="text"
                placeholder="Digite o nome do gerente"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Número de telefone
              </Label>
              <Input
                id="phoneNumber"
                type="text"
                placeholder="Digite o número de contato"
                {...register("phoneNumber")}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input
                type="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
            </div>
            <Button disabled={isSubmitting} className="w-full">
              Entrar
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos
              <a href="#" className="text-blue-300 hover:text-blue-500">
                {" "}
                Termos de Serviço{" "}
              </a>
              e
              <a href="#" className="text-blue-300 hover:text-blue-500">
                {" "}
                Política de Privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
