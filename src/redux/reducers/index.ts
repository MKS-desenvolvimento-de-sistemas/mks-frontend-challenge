import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";

const rootReducer = combineReducers({ products, cart });

export default rootReducer;
