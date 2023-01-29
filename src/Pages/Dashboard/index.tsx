import { useState } from "react";

import ModalCart from "../../Components/CartModal";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Main from "../../Components/Main";

export interface IModal {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Header showModal={showModal} setShowModal={setShowModal} />
      {showModal && (
        <ModalCart showModal={showModal} setShowModal={setShowModal} />
      )}
      <Main />
      <Footer />
    </>
  );
};

export default Dashboard;
