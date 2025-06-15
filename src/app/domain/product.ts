// NOTE: https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
