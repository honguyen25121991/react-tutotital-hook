import "./Product.scss";
import { snicker1, snicker2, snicker3, snicker4 } from "../../assets/images";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Product = () => {
  const [currentUpImg, setCurrentUpImg] = useState(snicker1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [snicker1, snicker2, snicker3, snicker4];
  const handleClickPreviewImg = () => {
    setIsOpen(true);
    let index = images.findIndex((item) => item === currentUpImg);
    setPhotoIndex(index, true);
    setIsOpen(true);
  };
  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img
              src={currentUpImg}
              alt="snicker"
              onClick={() => handleClickPreviewImg()}
            />
          </div>
          <div className="img-down">
            <div className="img-small">
              <img
                src={snicker1}
                alt="snicker"
                onClick={() => {
                  setCurrentUpImg(snicker1);
                }}
                className={currentUpImg === snicker1 ? "active" : null}
              />
            </div>
            <div className="img-small">
              <img
                src={snicker2}
                alt="snicker"
                onClick={() => {
                  setCurrentUpImg(snicker2);
                }}
                className={currentUpImg === snicker2 ? "active" : null}
              />
            </div>
            <div className="img-small">
              <img
                src={snicker3}
                alt="snicker"
                onClick={() => {
                  setCurrentUpImg(snicker3);
                }}
                className={currentUpImg === snicker3 ? "active" : null}
              />
            </div>

            <div className="img-small">
              <img
                src={snicker4}
                alt="snicker"
                onClick={() => {
                  setCurrentUpImg(snicker4);
                }}
                className={currentUpImg === snicker4 ? "active" : null}
              />
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
      {isOpen === true && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          //   animationDisabled={true}
          animationDuration={500}
        />
      )}
    </div>
  );
};
export default Product;
