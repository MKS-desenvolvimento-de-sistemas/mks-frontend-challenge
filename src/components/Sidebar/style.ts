import styled from "styled-components";

type PropTypeRg = {
  sidebar: any;
  right: number;
};

export const Container = styled.div.attrs((props: PropTypeRg) => ({
  right: props.sidebar,
}))<PropTypeRg>`
  background-color: var(--color-primary);
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 87%;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;
  display: flex;
  justify-content: flex-end;

  > svg {
    z-index: 1;
    right: -30px;
    position: fixed;
    margin: 26.4px 50px 0;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 87%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 486px;

    @keyframes showSidebar {
      from {
        opacity: 0;
        width: 0;
      }
      to {
        opacity: 1;
        width: 486px;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 26.4px;
  display: flex;
  flex-direction: column;
`;
