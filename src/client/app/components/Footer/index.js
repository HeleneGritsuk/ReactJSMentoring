import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterWrap = styled.footer`
  background: #464547;
  color: #ff8178;
`;

const Footer = () => (
  <FooterWrap>
    <Container>
      <p>netflixroulette</p>
    </Container>
  </FooterWrap>
);
export default Footer;
