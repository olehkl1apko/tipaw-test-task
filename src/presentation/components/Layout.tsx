import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Suspense } from "react";

import Header from "./Header/Header";
import LoadingFallback from "./LoadingFallback";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.default};
  background-color: ${({ theme }) => theme.color.light.bg};
`;

const Layout = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Suspense>
  );
};

export default Layout;
