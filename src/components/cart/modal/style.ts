import theme from "@/styles/theme";
import styled from "styled-components";

export const Modal = styled.div`
  background-color: ${theme.colors.primary};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  z-index: 2;
  box-shadow: -5px 0px 6px 0px #00000021;
`;

export const Content = styled.div`
  width: 85%;
  height: 90%;
  padding: 10px;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const CloseModal = styled.div`
  border-radius: 50%;
  padding: 10px 14px;
  background-color: ${theme.colors.black};
  cursor: pointer;
`;

export const ListProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 80%;
`;

export const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 24px;
`;

type FinalizePurchaseProps = {
  disabled: boolean,
}

export const FinalizePurchase = styled.div<FinalizePurchaseProps>`
  padding: 20px;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 10px;
  background-color: ${props => props.disabled ? '#ccc' : theme.colors.black};
  font-weight: 700;
`;