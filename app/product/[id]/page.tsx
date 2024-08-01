import { fetchProducts } from '@/lib/fetchProducts';
import { Product } from '@/types/Product';
import Header from "@/components/header/Header";
import Navigation from "@/components/blocks/navigation/Navigation";
import {MenuItem} from "@/types/MenuItem";
import {fetchCategories} from "@/lib/fetchCategories";
import SingleProduct from "@/components/blocks/single-product/SingleProduct";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let product: Product | undefined;

  try {
    const result = await fetchProducts();
    product = result.products.find((prod) => prod.url_key === id);
    console.log(product);
  } catch (error) {
    console.error('Failed to fetch products', error);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  let menuItems: MenuItem[] = [];

  try {
    menuItems = await fetchCategories();
  } catch (error) {
    console.error('Error fetching data: ', error);
  }

  return (
    <main className="main-container">
      <Header />
      <Navigation menuItems={menuItems} />
      <SingleProduct product={product} />
    </main>
  );
};

export default ProductPage;
