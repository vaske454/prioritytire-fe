import client from "@/lib/apolloClient";
import { GET_CATEGORIES_QUERY } from "@/graphql/GetCategories";

interface Category {
  id: string;
  name: string;
  product_count: number;
  children: Category[];
}

async function fetchCategories() {
  const { data } = await client.query({
    query: GET_CATEGORIES_QUERY,
    fetchPolicy: 'no-cache',
  });
  return { categoryList: data.categoryList };
}

const renderCategories = (categories: Category[], level: number = 0) => {
  if (level > 0) return null;

  return (
    <ul className="list-none pl-4">
      {categories.map((category: Category) => (
        <li key={category.id} className="mb-2">
          <div className="flex items-center cursor-pointer">
            <span className="text-lg font-semibold">{category.name}</span>
          </div>
          {category.children && category.children.length > 0 && (
            <div className="pl-4 border-l-2 border-gray-300">
              {renderCategories(category.children, level + 1)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navigation = async () => {
  const result = await fetchCategories();
  const categories = result.categoryList;

  return (
    <nav className="bg-gray-100 p-4">
      {renderCategories(categories)}
    </nav>
  );
}

export default Navigation;
