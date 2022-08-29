import styled from "styled-components";

interface IPriceProps {
  type: "product" | "cart";
}

export const Price = styled.div<IPriceProps>`
  padding: ${(props) => (props.type === "product" ? "5px 10px" : "8px 17px")};

  background-color: var(--secondary-color-100);
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: var(--primary-color-100);

  @media (min-width: 760px) {
    padding: ${(props) => (props.type === "product" ? "4px 7px" : "0")};

    background-color: ${(props) => props.type === "cart" && "transparent"};
    color: ${(props) => props.type === "cart" && "var(--secondary-color-300)"};
  }
`;
