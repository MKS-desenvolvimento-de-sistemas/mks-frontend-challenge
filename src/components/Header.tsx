import React from "react";
import CartButton from "./CartButton";

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>
          <span className='MKS'>MKS</span>{' '}Sistemas
        </p>
        <CartButton />
      </header>
    );
  }
}

export default Header;
