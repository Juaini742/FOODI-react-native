import { getAddress, getUser } from "@/api/secured";
import { AddressSchema } from "@/interfaces/AddressSchema";
import { useEffect, useState } from "react";

export const useAddress = () => {
  const [address, setAddress] = useState<AddressSchema | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await getAddress();
      setAddress(response);
    };

    fetch();
  }, []);

  return { address };
};
