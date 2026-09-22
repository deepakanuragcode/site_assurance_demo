import Link from "next/link";
import styled from "styled-components";

export const PageNotFoundWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  text-align: center;
`;

export const StatusCode = styled.p`
  font-size: 72px;
  font-weight: 700;
  line-height: 1;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const Message = styled.p`
  font-size: 16px;
  color: #555;
`;

export const HomeLink = styled(Link)`
  margin-top: 8px;
  background: #171717;
  color: #fff;
  border-radius: 8px;
  padding: 10px 16px;
`;
