import { getCategories } from "@/api/public";
import { getProducts } from "@/api/secured";
import { ProductType } from "@/interfaces/productType";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getCategories();
      setCategories(response);
    };

    fetch();
  }, []);

  return { categories };
};
