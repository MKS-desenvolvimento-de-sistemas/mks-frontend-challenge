import { useEffect, useState } from "react";
import styled from "styled-components";
import ControlPanel from "../ControlPanel";
import { getProducts } from "../Service/Api";
import Card from "../Card";
import Skeleton from "../components/Skeleton";
import { ICartItem } from "./Cart";

const HomeStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */
  flex-direction: column;
  & .cards {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Home = () => {
  const [count, setCount] = useState(0);
  const [listaProdutos, setListaProdutos] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const listarProdutos = async (page: number, rows: number) => {
    const produtos = await getProducts(page, rows);
    setIsLoading(false);
    setListaProdutos(produtos);
  };

  useEffect(() => {
    listarProdutos(1, 8);
  }, []);

  return (
    <>
      <HomeStyles>
        {isLoading && (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "3.2rem",
            }}
          >
            <Skeleton height="312px" width="232px" />
            <Skeleton height="312px" width="232px" />
            <Skeleton height="312px" width="232px" />
            <Skeleton height="312px" width="232px" />
            <Skeleton height="312px" width="232px" />
          </div>
        )}
        {/* <ControlPanel
          listaProdutos={listaProdutos}
          listarProdutos={listarProdutos}
          setListaProdutos={setListaProdutos}
        /> */}
        <div className="cards">
          {!!listaProdutos &&
            listaProdutos.products.map((produto) => (
              <Card key={produto.id} produto={produto}></Card>
            ))}
        </div>
      </HomeStyles>
    </>
  );
};

export default Home;
