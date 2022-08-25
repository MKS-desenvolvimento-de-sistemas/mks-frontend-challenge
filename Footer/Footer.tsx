import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 34px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  background-color: #eeeeee;
  color: #000000;
`;

const Footer = () => (
  <Container>MKS Sistemas © Todos os direitos reservados</Container>
);

export default Footer;
