export interface MenuItem {
  id: string;
  name: string;
  product_count: number;
  children?: MenuItem[];
}