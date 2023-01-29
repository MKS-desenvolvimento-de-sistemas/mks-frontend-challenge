import { IModal } from "../../Pages/Dashboard";
import { CartIcon } from "../../Icons/Vector";
import { Head, Logo } from "./style";

const Header = ({ showModal, setShowModal }: IModal) => {
  return (
    <Head>
      <Logo>
        <p className="first-name">MKS</p>
        <p className="middle-name">Sistemas</p>
      </Logo>
      <button onClick={() => setShowModal(!showModal)} className="cartButton">
        <CartIcon />
        <p className="cout-cart">0</p>
      </button>
    </Head>
  );
};

export default Header;
