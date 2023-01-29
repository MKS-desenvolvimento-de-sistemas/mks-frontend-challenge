import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { IProduct } from "../../store/modules/Products";
import { CloseButton, Modal } from "./style";
import CartProduct from "./CartProduct";
import API from "../../Services/API";
import { IModal } from "../../Pages/Dashboard";

const ModalCart = ({ showModal, setShowModal }: IModal) => {
  const [product, setProduct] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      const fetchProducts = await API.get(
        "products?page=1&rows=8&sortBy=name&orderBy=ASC"
      ).then((res) => res.data.products);
      setProduct([fetchProducts[0], fetchProducts[1]]);
      // setProduct(fetchProducts)
      setIsLoaded(true);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        setShowModal(false)
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <Modal>
      {!isLoaded ? (
        <div>
          <h1>Carregando</h1>
        </div>
      ) : (
        <>
          <div className="modal-header flex-items">
            <p>Carrinho de compras</p>
            <CloseButton
              onClick={() => setShowModal(!showModal)}
              close="modal"
              dimension="big"
              font="big"
            >
              X
            </CloseButton>
          </div>

          <ul className="cart-list">
            {product.map((item: IProduct) => (
              <CartProduct
                key={item.id}
                name={item.name}
                photo={item.photo}
                price={item.price}
              />
            ))}
          </ul>

          <div className="total-cart flex-items">
            <p>Total:</p>
            <p>R$798</p>
          </div>
          <button className="checkout">Finalizar a Compra</button>
        </>
      )}
    </Modal>
  );
};

export default ModalCart;
