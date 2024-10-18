import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 bg-gray-100">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-[url('./src/assets/pizza_login.jpg')] bg-cover p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-primary">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Shop</span>
        </div>
        <footer className="text-sm text-primary">
          Painel do parceiro &copy; Pizza Shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
