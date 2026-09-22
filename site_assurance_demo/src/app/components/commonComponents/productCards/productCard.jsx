"use client";

import {
  ProductButton,
  ProductCardWrapper,
  ProductDescription,
  ProductListWrapper,
  ProductPrice,
  ProductTitle,
} from "./productCard.styled";

const ProductCard = ({
  title = "Test Product",
  price = 49,
  description = "Sample product card for testing.",
}) => {
  return (
    <ProductCardWrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>${price}</ProductPrice>
      <ProductDescription>{description}</ProductDescription>
      <ProductButton type="button">Add to cart</ProductButton>
    </ProductCardWrapper>
  );
};

export function ProductList({ products }) {
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ProductListWrapper>
  );
}

export default ProductCard;
