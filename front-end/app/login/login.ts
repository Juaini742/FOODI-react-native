import axios from "axios";
import { LoginSchema } from "@/interfaces/loginSchema";
import { storeToken } from "@/api/user";

export const login = async (data: LoginSchema) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/public/user/login",
      data
    );

    const { token } = response.data;

    await storeToken(token);
  } catch (error) {
    console.error("Login failed", error);
  }
};
