import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/modules/Products";

const Dashboard = () => {
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
					<h1>Dashboard</h1>
          <h2>MKS-FRONTEND-CHALLENGE</h2>
        </div>
      )}
    </>
  );
};

export default Dashboard;
