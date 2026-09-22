"use client";

import {
  HomeLink,
  Message,
  PageNotFoundWrapper,
  StatusCode,
  Title,
} from "./page-not-founds.styled";

const PageNotFound = () => {
  return (
    <PageNotFoundWrapper>
      <StatusCode>404</StatusCode>
      <Title>Page not found</Title>
      <Message>The page you are looking for does not exist.</Message>
      <HomeLink href="/">Go to home</HomeLink>
    </PageNotFoundWrapper>
  );
};

export default PageNotFound;
