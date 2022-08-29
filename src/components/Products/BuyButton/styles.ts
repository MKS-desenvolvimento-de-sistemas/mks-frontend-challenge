import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 8.06px 0 12.55px 0;
  background: var(--terciary-color);
  border-radius: 0px 0px 8px 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16.12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: var(--primary-color-100);

  &:hover {
    filter: opacity(0.8);
  }

  @media (min-width: 760px) {
    gap: 14px;
    padding: 7px 0 10.91px 0;
  }
`;
