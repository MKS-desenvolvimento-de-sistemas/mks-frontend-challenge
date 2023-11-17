import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "../CartItem";
import { cartActions } from "../store";

export interface ICartItem {
  id: number;
  name: string;
  description: string;
  photo: string;
  brand: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  quantity: number;
}

const CartStyles = styled.div`
  position: fixed;
  right: 0;
  width: 35%;
  top: 0;
  background-color: #0a5bb8;
  box-shadow: 0 0 9px #4242427b;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 200ms ease-in-out;
  & .title {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: white;
    width: 7rem;
    font-size: larger;
    font-weight: 700;
  }

  & .sticky-wrapper {
    position: sticky;
    display: flex;
    justify-content: center;
    width: 80%;
  }
  & .selected-items {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    position: absolute;
    top: 6.5rem;
    width: 70%;
    max-height: 60%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 1.5rem;
    padding-left: 3rem;
    padding-top: 1rem;
  }
  & .list-header {
    position: sticky;
    top: 0;
    background-color: white;
  }
  & th {
    width: 1rem;
  }
  & .total {
    position: absolute;
    bottom: 5rem;
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & .exit-cart {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-color: black;
    color: white;
    border-radius: 50rem;
    width: 0.5rem;
    display: flex;
    justify-content: center;
    font-weight: 700;
  }
  & .finalizar-compra {
    position: absolute;
    bottom: 0;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    background-color: black;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
`;

type Props = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

const Cart = ({ showCart, setShowCart }: Props) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState(0);
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items || items.length === 0) return;
    console.log({ items });

    setCart(addItemsGroupedToCart(items));
  }, [items]);

  useEffect(() => {
    if (!cart || cart.length === 0) return;
    calcTotal();
  }, [cart]);

  const calcTotal = () => {
    const totalArr = [] as number[];
    cart.forEach((item) => {
      totalArr.push(+item.price * item.quantity);
    });

    const sum = totalArr.reduce((acc, cur) => acc + cur, 0) as number;

    setTotal(sum);
  };

  const addItemsGroupedToCart = (values) => {
    // const grouped = values.reduce((r, v, i, a) => {
    //   if (v === a[i - 1]) {
    //     r[r.length - 1].push(v);
    //   } else {
    //     r.push([v]);
    //   }
    //   return r;
    // }, []);

    const grouped = values.reduce((acc, cur, index, arr) => {
      acc[cur.id] = acc[cur.id] || [];
      acc[cur.id].push(cur);

      return acc;
    }, {});

    const finalArr = [] as ICartItem[];

    Object.values(grouped).forEach((group) => {
      const newItem = {
        id: group[0].id,
        name: group[0].name,
        description: group[0].description,
        photo: group[0].photo,
        brand: group[0].brand,
        price: group[0].price,
        createdAt: group[0].createdAt,
        updatedAt: group[0].updatedAt,
        quantity: group.length,
      };
      finalArr.push(newItem);
    });

    return finalArr;

    // return finalArr;
  };

  return (
    <CartStyles
      style={{ transform: showCart ? "translateX(0%)" : "translateX(100%)" }}
    >
      <button onClick={() => setShowCart(false)} className="exit-cart">
        X
      </button>
      <label className="title">
        Carrinho <br />
        de compras
      </label>
      <div className="selected-items">
        {items.length !== 0 && cart.map((item) => <CartItem item={item} />)}
      </div>

      <div className="total">Total: R${items.length > 0 ? total : "0"}</div>
      <div
        onClick={() => {
          setShowCart(false);
          dispatch(cartActions.deleteAllItems());
        }}
        className="finalizar-compra"
      >
        Finalizar Compra
      </div>
    </CartStyles>
  );
};

export default Cart;
