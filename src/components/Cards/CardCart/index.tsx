import { CartListContainer } from "./style";

export const CardCart = () => {
  return (
    <CartListContainer>
      <li className="card_container">
        <figure>
          <button className="card_container-close">X</button>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-title">
          <h3>Apple Watch Series 4 Gps</h3>
        </section>
        <section className="card_container-info">
          <div className="card_container-info-quant">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div className="card_container-info-price">
            <p>R$399</p>
          </div>
        </section>
      </li>

      <li className="card_container">
        <figure>
          <button className="card_container-close">X</button>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-title">
          <h3>Apple Watch Series 4 Gps</h3>
        </section>
        <section className="card_container-info">
          <div className="card_container-info-quant">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div className="card_container-info-price">
            <p>R$399</p>
          </div>
        </section>
      </li>

      <li className="card_container">
        <figure>
          <button className="card_container-close">X</button>
          <img src="apple-watch.png" alt="" />
          <figcaption>apple-watch</figcaption>
        </figure>
        <section className="card_container-title">
          <h3>Apple Watch Series 4 Gps</h3>
        </section>
        <section className="card_container-info">
          <div className="card_container-info-quant">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div className="card_container-info-price">
            <p>R$399</p>
          </div>
        </section>
      </li>
    </CartListContainer>
  );
};
