import { api } from "@/lib/api";

interface LoginData {
  email: string;
  password: string;
}

export async function login(data: LoginData) {
  const response = await api.post(
    "/api/v1/auth/token",
     data
  );

  return response.data;
}