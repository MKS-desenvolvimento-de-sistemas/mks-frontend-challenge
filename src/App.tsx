import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & header {
    background-color: #0a5bb8;
    width: 100%;
    position: relative;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 5rem;

    & label {
      position: absolute;
      color: white;
      left: 2rem;
      font-size: 2rem;
      font-weight: 100;
    }
    & nav {
      & ul {
        padding-right: 2rem;
        margin: 0;
        display: flex;
        gap: 2rem;
        list-style: none;
        & li {
          display: flex;
          align-items: center;
          margin-left: 0;
          padding-left: 0;
        }
        & .cart-btn {
          & button {
            display: flex;
            gap: 1rem;
          }
        }
      }
    }
  }
`;

function App() {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state) => state.items);

  return (
    <AppStyles>
      <header>
        <label htmlFor="">MKS sistemas</label>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="cart-btn">
              <button onClick={() => setShowCart(true)}>
                <FontAwesomeIcon icon={faCartShopping} />
                {items.length}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Home></Home>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </AppStyles>
  );
}

export default App;
