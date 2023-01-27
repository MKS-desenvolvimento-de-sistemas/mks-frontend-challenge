import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProducts } from "../../store/modules/Products";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

const Dashboard = () => {
  const product = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(product.products);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Dashboard;
