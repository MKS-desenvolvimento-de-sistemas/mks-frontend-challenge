import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducerProducts } from "./modules/ProductsList/reducers";
import { reducerSidebar } from "./modules/SideBar/reducer";

const reducers = combineReducers({
  sidebar: reducerSidebar,
  products: reducerProducts,
});

export const store = createStore(reducers, applyMiddleware(thunk));
