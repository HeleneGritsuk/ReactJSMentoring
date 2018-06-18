import React from "react";
import styled from "styled-components";

import "./style.css";

const NotFoundDiv = styled.div`
  text-align: center;
`;

const NotFoundScreen = () => (
  <div className="main-wrapper not-found">
    <h1>404</h1>
    <h2>Page not found</h2>
  </div>
);

export default NotFoundScreen;
