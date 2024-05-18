import axios from "axios";
import { URL_PUBLIC } from "./url";
import { UserSchema } from "@/interfaces/UserSchema";
import * as SecureStore from "expo-secure-store";
import { LoginSchema } from "@/interfaces/loginSchema";

// export const register = async (data: UserSchema) => {
//   try {
//     const response = await axios.post(`${URL_PUBLIC}/user/register`, data);

//     if (!response) {
//       return console.error("something going wrong");
//     }

//     const token = response.data.token;

//     await SecureStore.setItemAsync("token", token);

//     console.log("oke2");

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const PostRequestData = async ({ url, data }: { url: string; data: any }) => {
  try {
    const response = await axios.post(url, data);

    if (!response) {
      return console.error("something going wrong");
    }

    const token = response.data.token;

    await SecureStore.setItemAsync("token", token);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const register = async (data: UserSchema) => {
  return PostRequestData({ url: `${URL_PUBLIC}/user/register`, data });
};

export const login = async (data: LoginSchema) => {
  return PostRequestData({ url: `${URL_PUBLIC}/user/login`, data });
};

export const getCategories = async () => {
  try {
    const response = await axios.get(
      `http://192.168.1.106:8080/api/public/category`
    );

    if (!response || !response.data) {
      throw new Error(`HTTP error! No data received`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
