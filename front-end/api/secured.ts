import axios from "axios";
import { URL_SECURED } from "./url";
import * as SecureStore from "expo-secure-store";
import { BioSchema } from "@/interfaces/BioType";
import { AddressSchema } from "@/interfaces/AddressSchema";

const getToken = async () => {
  return await SecureStore.getItemAsync("token");
};

const getRequestData = async (url: string) => {
  try {
    const token = await getToken();

    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    });

    if (!response || !response.data) {
      throw new Error("HTTP error! No data received");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const postRequestData = async ({ url, data }: { url: string; data: any }) => {
  try {
    const token = await getToken();

    const response = await axios.post(url, data, {
      headers: {
        Authorization: token,
      },
    });

    if (!response || !response.data) {
      throw new Error("HTTP error! No data received");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // return [];
  }
};

const putRequestData = async ({ url, data }: { url: string; data: any }) => {
  try {
    const token = await getToken();

    const response = await axios.put(url, data, {
      headers: {
        Authorization: token,
      },
    });

    if (!response || !response.data) {
      throw new Error("HTTP error! No data received");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// USER
export const getUser = async () => {
  return await getRequestData(`${URL_SECURED}/user`);
};
export const updateUser = async (data: BioSchema) => {
  return await putRequestData({ url: `${URL_SECURED}/user`, data });
};

// ADDRESS
export const addAddress = async (data: AddressSchema) => {
  return await postRequestData({ url: `${URL_SECURED}/address`, data });
};
export const getAddress = async () => {
  return await getRequestData(`${URL_SECURED}/address`);
};

// PRODUCTS
export const getProducts = async (category?: string) => {
  const url = category
    ? `${URL_SECURED}/product/?category=${category}`
    : `${URL_SECURED}/product/`;
  return await getRequestData(url);
};
export const getOneProduct = async (id?: string) => {
  return await getRequestData(`${URL_SECURED}/product/${id}`);
};

// CART
export const addCart = async (data: any) => {
  return await postRequestData({
    url: `${URL_SECURED}/cart/`,
    data,
  });
};
export const getCart = async () => {
  return await getRequestData(`${URL_SECURED}/cart/`);
};

export const deleteCart = async (id: string) => {
  try {
    const token = await getToken();

    const response = await axios.delete(`${URL_SECURED}/cart/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    if (!response || !response.data) {
      throw new Error("HTTP error! No data received");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
