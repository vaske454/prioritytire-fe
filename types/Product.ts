import { Image } from '@/types/Image';
import { ProductPrice } from '@/types/ProductPrice';

export interface Product {
  id: string;
  name: string;
  sku: string;
  short_description: {
    html: string;
  };
  price: ProductPrice;
  image: Image;
  url_key: string;
  stock_status: string;
  categories: { name: string }[];
  country_of_manufacture: string;
  activity: string;
  style_general: string;
  material: string;
  sleeve: string;
  size: string;
  collar: string;
  pattern: string;
  climate: string;
  color: string;
  eco_collection: string;
  performance_fabric: string;
  erin_recommends: string;
  new: boolean;
  sale: boolean;
  weight?: number;
}
