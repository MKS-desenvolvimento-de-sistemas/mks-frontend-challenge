import { useEffect, useState } from "react";

import ModalCart from "../../Components/CartModal";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Main from "../../Components/Main";

export interface IModal {
  modalAnimation?: any;
  setModalAnimation: (show: boolean) => void;
}
const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalAnimation, setModalAnimation] = useState<boolean>(false);

  useEffect(() => {
    showModal === true
      ? setTimeout(() => {
          setShowModal(modalAnimation);
        }, 450)
      : setShowModal(modalAnimation);
  }, [modalAnimation]);

  return (
    <>
      <Header
        setModalAnimation={setModalAnimation}
        modalAnimation={modalAnimation}
      />
      {showModal && (
        <ModalCart
          setModalAnimation={setModalAnimation}
          modalAnimation={modalAnimation}
        />
      )}
      <Main />
      <Footer />
    </>
  );
};

export default Dashboard;
