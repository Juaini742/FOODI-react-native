import { ProductType } from "./productType";

export type CartType = {
  id: string;
  quantity: number;
  product: ProductType;
};
