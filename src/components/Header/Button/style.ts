import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 10px 15px;

  p {
    margin-left: 10px;
    font-weight: 700;
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 13px 23px;

    p {
      margin-left: 15px;
      font-weight: 700;
      font-size: 18px;
    }
  }
`;
