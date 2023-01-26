import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchProducts } from "./store/modules/Products";

function App() {
  const product = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(product.products);
  return (
    <>
      {product.loading ? (
        <div>
          <h1>Carregando</h1>
        </div>
      ) : (
        <div>
          <h1>MKS-FRONTEND-CHALLENGE</h1>
        </div>
      )}
    </>
  );
}

export default App;
