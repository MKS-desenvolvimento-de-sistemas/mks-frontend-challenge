import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "../Cart";
import { Button } from "./Button";
import { HeaderContainer } from "./style";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <HeaderContainer>
      <div className="header_div-container">
        <div className="header_div-logo">
          <h1>MKS</h1>
          <h3>Sistemas</h3>
        </div>
        <div>
          <Button icon={FaShoppingCart} onClick={() => showSidebar()}>
            0
          </Button>
        </div>
        {sidebar && <Cart active={setSidebar} />}
      </div>
    </HeaderContainer>
  );
};
