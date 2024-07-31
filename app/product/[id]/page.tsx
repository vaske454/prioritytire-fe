import { fetchProducts } from '@/lib/fetchProducts';
import { Product } from '@/types/Product';
import Image from 'next/image';
export async function generateStaticParams() {
  const result = await fetchProducts();
  const products = result.products;

  return products.map((product) => ({
    id: product.url_key,
  }));
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let product: Product | undefined;

  try {
    const result = await fetchProducts();
    product = result.products.find((prod) => prod.url_key === id);
  } catch (error) {
    console.error('Failed to fetch products', error);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <Image
        src={product.image.url}
        alt={product.name}
        width={436}
        height={436}
        className="w-full h-40 object-cover mb-2"
      />
      {/*<p className="text-lg mb-4">{product.description}</p>*/}
      <p className="text-xl font-semibold mb-4">
        {product.price.regularPrice.amount.value} {product.price.regularPrice.amount.currency}
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductPage;
