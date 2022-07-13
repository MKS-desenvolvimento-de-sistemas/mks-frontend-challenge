import { ListProducts } from "../../components/Cards/CardProduct";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { StoreComponent } from "./style";

export const Store = () => {
  return (
    <StoreComponent>
      <Header />
      <section className="container_list">
        <ListProducts />
      </section>
      <Footer />
    </StoreComponent>
  );
};
