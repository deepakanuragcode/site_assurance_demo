import styled from "styled-components";

export const ProductCardWrapper = styled.article`
  width: 280px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
`;

export const ProductButton = styled.button`
  background: #171717;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
`;
