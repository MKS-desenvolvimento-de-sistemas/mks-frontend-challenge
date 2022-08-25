import styled, { css } from "styled-components";
import { ImCross } from "react-icons/im";
import ShoppingCartCard from "@/components/ShoppingCartCard/ShoppingCartCard";
import { useAppSelector } from "../../hooks/redux";
import { selectProducts, selectTotal } from "../../store/store";
import { formatBrlCurrency } from "../../utils";

const drawerPaddingX = "32px";

const DrawerWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 48px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${(props) => (props.visible ? 100 : -1)};
  backdrop-filter: ${(props) => (props.visible ? "blur(8px)" : undefined)};
  transition: all 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 26px;
  right: 15px;
  width: 45px;
  height: 45px;
  background-color: #000;
  border: 0;
  border-radius: 50%;
  color: #fff;

  &:active {
    filter: brightness(999%);
  }
`;

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 85%;
  max-width: 380px;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 25px ${drawerPaddingX} 0 ${drawerPaddingX};
  background-color: ${(props) => props.theme.main.color.primary};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  transform: ${(props) =>
    !props.visible ? "translate(calc(100% + 5px))" : ""};
  transition: transform 0.3s ease-in-out;
  z-index: 101;
`;

const text700 = css`
  font-weight: 700;
  color: #fff;
`;

const Title = styled.h1`
  ${text700};
  max-width: 80%;
  font-size: 27px;
  line-height: 33px;
`;

const CheckoutButton = styled.button`
  ${text700};
  font-size: 20px;
  line-height: 15px;
  position: absolute;
  background-color: #000;
  height: 65px;
  border: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CartItems = styled.div`
  position: absolute;
  top: 100px;
  bottom: 180px;
  left: ${drawerPaddingX};
  right: ${drawerPaddingX};
  overflow-y: auto;
`;

const TotalTextContainer = styled.div`
  position: absolute;
  left: ${drawerPaddingX};
  right: ${drawerPaddingX};
  bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  font-weight: 700;
  font-size: 28px;
  line-height: 2rem;
  color: #fff;
`;

export interface ShoppingCartDrawer {
  visible: boolean;
  onClose: () => void;
}

const ShoppingCartDrawer = ({ visible, onClose }: ShoppingCartDrawer) => {
  const products = useAppSelector(selectProducts);
  const total = useAppSelector(selectTotal);
  return (
    <>
      <DrawerWrapper onClick={onClose} visible={visible}></DrawerWrapper>
      <Container visible={visible}>
        <Title>Carrinho de compras</Title>
        <CloseButton onClick={onClose}>
          <ImCross style={{ verticalAlign: "middle" }} />
        </CloseButton>
        <CartItems>
          {products.map((product) => (
            <ShoppingCartCard key={product.id} product={product} />
          ))}
        </CartItems>
        <TotalTextContainer>
          <span>Total:</span>
          <span>{formatBrlCurrency(total)}</span>
        </TotalTextContainer>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </Container>
    </>
  );
};

export default ShoppingCartDrawer;
