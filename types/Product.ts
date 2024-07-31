import {Image} from '@/types/Image';
import {ProductPrice} from '@/types/ProductPrice';

export interface Product {
  id: string;
  name: string;
  price: ProductPrice;
  image: Image;
  url_key: string;
}
