import {
  ADD_PRODUCT,
  ONE_LESS,
  ONE_MORE,
  REMOVE_ITEM,
  SHOW_CART,
  UPDATE_VALUE,
} from "../actions";

const INITIAL_STATE = {
  products: [],
  value: 0,
  visible: false,
};

type ProductCart = {
  productId: string;
  count?: number | 0;
};

type Store = {
  products: ProductCart[];
};

const cart = (
  store = INITIAL_STATE,
  action: { type: string; productId: string; value: number }
) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return { ...store, products: removeItem(store, action.productId) };
    case SHOW_CART:
      return { ...store, visible: !store.visible };
    case ONE_LESS:
      return { ...store, products: removeProduct(store, action.productId) };
    case ONE_MORE:
      return { ...store, products: addProduct(store, action.productId) };
    case UPDATE_VALUE:
      return { ...store, value: store.value + action.value };
    case ADD_PRODUCT:
      return { ...store, products: organizeItems(store, action.productId) };
    default:
      return store;
  }
};

const removeItem = ({ products }: Store, productId: string) => {
  const position = products.findIndex(
    (product) => product.productId === productId
  );
  const newArr = [...products];
  newArr.splice(position, 1);
  return newArr;
};

const removeProduct = ({ products }: Store, productId: string) => {
  if (
    products.find((product) => product.productId === productId)?.count === 1
  ) {
    const position = products.findIndex(
      (product) => product.productId === productId
    );
    const newArr = [...products];
    newArr.splice(position, 1);
    return newArr;
  }
  const newStore = [...products].map((product) => {
    if (product.productId === productId && product.count) {
      return { productId, count: product.count - 1 };
    }
    return product;
  });
  return newStore;
};

const addProduct = ({ products }: Store, productId: string) => {
  const newStore = [...products].map((product) => {
    if (product.productId === productId && product.count) {
      return { productId, count: product.count + 1 };
    }
    return product;
  });
  return newStore;
};

const organizeItems = (
  { products }: Store,
  productId: string
): ProductCart[] => {
  if (JSON.stringify(products).includes(`"productId":"${productId}"`)) {
    const newStore = [...products].map((product) => {
      if (product.productId === productId && product.count) {
        return { productId, count: product.count + 1 };
      }
      return product;
    });
    return newStore;
  }
  return [...products, { productId, count: 1 }];
};

export default cart;
