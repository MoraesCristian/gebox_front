import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { login } from "@/services/auth";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = await login({
        email,
        password,
      });

      localStorage.setItem("token", data.access_token);

      alert("Login realizado!");
    } catch (error) {
      console.error(error);

      alert("Erro ao fazer login");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Entrar
      </button>
    </form>
  );
}