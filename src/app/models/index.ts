export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }


export interface IProduct {
  products: Product[],
  categories: string[]
}


export interface IProductSingle {
  product: Product
}