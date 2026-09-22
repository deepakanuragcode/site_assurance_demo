"use client";
import Link from "next/link";
import ProductCard from "../components/commonComponents/productCards/productCard";

const ProductPage = () => {
  return (
    <div>
      <Link href="/">
        <ProductCard />
      </Link>
    </div>
  );
};

export default ProductPage;
