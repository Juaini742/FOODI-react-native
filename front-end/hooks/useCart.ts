import { getCart } from "@/api/secured";
import { useEffect, useState } from "react";
import { CartType } from "@/interfaces/cartType";
import useCountStore from "./useCountStore";

export const useCart = () => {
  const [carts, setCarts] = useState<CartType[]>([]);
  const { setCount } = useCountStore() as {
    setCount: (count: number) => void;
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await getCart();
      setCarts(response);
      setCount(response.length);
    };

    fetch();
  }, []);

  return { carts, setCarts };
};
