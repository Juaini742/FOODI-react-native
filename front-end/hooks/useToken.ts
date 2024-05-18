import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const useToken = () => {
  const [token, setToken] = useState<null | string>(null);

  useEffect(() => {
    const fetch = async () => {
      const token2 = await SecureStore.getItemAsync("token");
      setToken(token2);
    };

    fetch();
  }, []);

  return { token };
};
