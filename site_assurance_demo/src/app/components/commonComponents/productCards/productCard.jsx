"use client";

import {
  ProductButton,
  ProductCardWrapper,
  ProductDescription,
  ProductPrice,
  ProductTitle,
} from "./productCard.styled";

const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <ProductTitle>Test Product</ProductTitle>
      <ProductPrice>$49</ProductPrice>
      <ProductDescription>
        Sample product card for testing.
      </ProductDescription>
      <ProductButton type="button">Add to cart</ProductButton>
    </ProductCardWrapper>
  );
};

export default ProductCard;
