import React from "react";
import styled from "styled-components";

const StyledNotFoundDiv = styled.div`
  text-align: center;
`;

const NotFoundScreen = () => (
  <StyledNotFoundDiv className="main-wrapper">
    <h1>404</h1>
    <h2>Page not found</h2>
  </StyledNotFoundDiv>
);

export default NotFoundScreen;
