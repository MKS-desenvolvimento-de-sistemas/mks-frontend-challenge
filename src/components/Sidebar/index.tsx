import { AiFillCloseCircle } from "react-icons/ai";
import { Container, Content } from "./style";

export const Sidebar = ({ active, children }: any) => {
  const CloseSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <AiFillCloseCircle onClick={CloseSidebar} size={30} />
      <Content>{children}</Content>
    </Container>
  );
};
