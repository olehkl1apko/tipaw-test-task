import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Suspense } from "react";

import Header from "./Header/Header";

export const Container = styled.div`
  font-family: ${({ theme }) => theme.font.default};
  background-color: ${({ theme }) => theme.color.light.bg};
`;

const Layout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </Suspense>
  );
};

export default Layout;
