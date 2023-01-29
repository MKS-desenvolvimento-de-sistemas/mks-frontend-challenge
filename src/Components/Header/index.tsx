import { useSelector } from "react-redux";

import { IModal } from "../../Pages/Dashboard";
import { CartIcon } from "../../Icons/Vector";
import { RootState } from "../../store";
import { Head, Logo } from "./style";

const Header = ({ showModal, setShowModal }: IModal) => {
  const { itemsInCart } = useSelector((state: RootState) => state.cart);

  return (
    <Head>
      <Logo onClick={() => setShowModal(!showModal)}>
        <p className="first-name">MKS</p>
        <p className="middle-name">Sistemas</p>
      </Logo>
      <button onClick={() => setShowModal(!showModal)} className="cartButton">
        <CartIcon />
        <p className="cout-cart">{itemsInCart}</p>
      </button>
    </Head>
  );
};

export default Header;
