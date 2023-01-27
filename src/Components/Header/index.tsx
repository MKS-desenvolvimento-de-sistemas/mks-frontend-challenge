import { CartIcon } from "../../Icons/Vector";
import { Head, Logo } from "./style";

const Header = () => {
  return (
    <Head>
      <Logo>
        <p className="first-name">MKS</p>
        <p className="middle-name">Sistemas</p>
      </Logo>
      <button className="cartButton">
        <CartIcon />
				<p className="cout-cart">0</p>
      </button>
    </Head>
  );
};

export default Header;
