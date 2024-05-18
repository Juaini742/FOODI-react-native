interface CategoryType {
  name: string;
}

export interface ProductType {
  id: string;
  name: string;
  price: number;
  img: string;
  store: string;
  category_id: string;
  category: CategoryType;
}
