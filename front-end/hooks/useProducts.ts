import { getProducts } from "@/api/secured";
import { ProductType } from "@/interfaces/productType";
import { useEffect, useState } from "react";

type Props = {
  category?: string;
};

export const useProducts = ({ category }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getProducts(category);
      setProducts(response);
    };

    fetch();
  }, [category]);

  return { products };
};
