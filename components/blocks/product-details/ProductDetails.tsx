import React from "react";
import { Product } from "@/types/Product";
import './ProductDetails.css';

interface SingleProductProps {
  product: Product;
}

const ProductDetails: React.FC<SingleProductProps> = ({ product }) => {
  return (
    <table className="product-details-table">
      <tbody>
      <tr>
        <th>SKU</th>
        <td>{product.sku}</td>
      </tr>
      <tr>
        <th>Stock Status</th>
        <td>{product.stock_status}</td>
      </tr>
      <tr>
        <th>Categories</th>
        <td>{product.categories.map(category => category.name).join(', ')}</td>
      </tr>
      <tr>
        <th>Country of Manufacture</th>
        <td>{product.country_of_manufacture}</td>
      </tr>
      <tr>
        <th>Activity</th>
        <td>{product.activity}</td>
      </tr>
      <tr>
        <th>Style General</th>
        <td>{product.style_general}</td>
      </tr>
      <tr>
        <th>Material</th>
        <td>{product.material}</td>
      </tr>
      <tr>
        <th>Sleeve</th>
        <td>{product.sleeve}</td>
      </tr>
      <tr>
        <th>Size</th>
        <td>{product.size}</td>
      </tr>
      <tr>
        <th>Collar</th>
        <td>{product.collar}</td>
      </tr>
      <tr>
        <th>Pattern</th>
        <td>{product.pattern}</td>
      </tr>
      <tr>
        <th>Climate</th>
        <td>{product.climate}</td>
      </tr>
      <tr>
        <th>Color</th>
        <td>{product.color}</td>
      </tr>
      <tr>
        <th>Eco Collection</th>
        <td>{product.eco_collection}</td>
      </tr>
      <tr>
        <th>Performance Fabric</th>
        <td>{product.performance_fabric}</td>
      </tr>
      <tr>
        <th>Erin Recommends</th>
        <td>{product.erin_recommends}</td>
      </tr>
      <tr>
        <th>New</th>
        <td>{product.new ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <th>Sale</th>
        <td>{product.sale ? 'Yes' : 'No'}</td>
      </tr>
      {product.weight && (
        <tr>
          <th>Weight</th>
          <td>{product.weight}</td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

export default ProductDetails;
