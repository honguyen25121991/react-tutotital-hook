import "./Product.scss";
import { snicker1, snicker2, snicker3, snicker4 } from "../../assets/images";

const Product = () => {
  return (
    <div className="product-container">
      <div className="content-left">
        <div className="img-up">
          <img src={snicker1} alt="snicker" />
        </div>
        <div className="img-down">
          <div className="img-small">
            <img src={snicker1} alt="snicker" />
          </div>
          <div className="img-small">
            <img src={snicker2} alt="snicker" />
          </div>
          <div className="img-small">
            <img src={snicker3} alt="snicker" />
          </div>

          <div className="img-small">
            <img src={snicker4} alt="snicker" />
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="title">Giay chay bo nam New Balance</div>
        <div className="price">1.800.000</div>
        <div className="size">Size :35</div>
        <div className="action">
          <label className="quantity">So Luong</label>
          <input type="number" min={1} value={1} />
          <button className="buy">Chon Mua</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
