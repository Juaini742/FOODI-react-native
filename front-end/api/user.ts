import axios from "axios";
import * as keychain from "react-native-keychain";

export const storeToken = async (token: string) => {
  try {
    await keychain.setGenericPassword("token", token);
  } catch (error) {
    console.error("Could not store the token", error);
  }
};

export const getToken = async () => {
  try {
    const services = await keychain.getAllGenericPasswordServices();

    if (!services) {
      console.log("No token stored");
    }

    for (const service of services) {
      const credentials = await keychain.getGenericPassword({ service });
      if (credentials) {
        return credentials.password;
      }
    }
  } catch (error) {
    console.error("Could not retrieve the token", error);
  }
  return null;
};

const instance = axios.create({
  baseURL: "http://localhost:8080/api/public/user/login",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
