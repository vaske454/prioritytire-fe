export interface ProductPrice {
  regularPrice: {
    amount: {
      value: number;
      currency: string;
    };
  };
}

export interface ProductImage {
  url: string;
}

export interface Product {
  id: string;
  name: string;
  price: ProductPrice;
  image: ProductImage;
  url_key: string;
}
