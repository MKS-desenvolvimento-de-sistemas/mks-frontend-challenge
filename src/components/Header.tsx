import React from "react";
import CartButton from "./CartButton";
import { HeaderStyled } from "./headerStyled";

class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <p>
          <span className="MKS">MKS</span> Sistemas
        </p>
        <CartButton />
      </HeaderStyled>
    );
  }
}

export default Header;
