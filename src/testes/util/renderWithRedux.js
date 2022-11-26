import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import cart from "../../redux/reducers/cart";
import products from "../../redux/reducers/products";
import thunk from "redux-thunk";

const renderWithRedux = (
  component,
  {
    store = createStore(
      combineReducers({ cart, products }),
      applyMiddleware(thunk)
    ),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

export default renderWithRedux;
