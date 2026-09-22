import Link from "next/link";
import { ProductList } from "../components/commonComponents/productCards/productCard";
import { getProducts } from "../../services/products";

const ProductPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <Link href="/">Navigate to Home</Link>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
