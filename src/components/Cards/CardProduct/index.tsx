import { ListContainer } from "./style";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useSelector } from "react-redux";

export const ListProducts = () => {
  //const { products } = useSelector(({ store }: any) => store);

  return (
    <ListContainer>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
      <li className="card_container">
        <figure>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-info">
          <section className="card_container-info-title">
            <h3>Apple Watch Series 4 Gps</h3>
            <div>
              <p>R$399</p>
            </div>
          </section>
          <small>Redesigned from scratch and completely revised.</small>
          <button>
            <RiShoppingBag3Line size={19} />
            <p>COMPRAR</p>
          </button>
        </section>
      </li>
    </ListContainer>
  );
};
