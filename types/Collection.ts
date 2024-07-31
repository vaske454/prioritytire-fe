import {Image} from '@/types/Image';

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: Image;
}