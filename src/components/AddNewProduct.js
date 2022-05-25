import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [isShowDetail, setIsShowDetail] = useState(false);
  const handleClickBtn = () => {
    let object = {
      name,
      price,
      size,
      color,
    };

    let productList = localStorage.getItem("productList");
    if (productList) {
      let arr = JSON.parse(productList);
      arr.push(object);
      localStorage.setItem("productList", JSON.stringify(arr));
    } else {
      localStorage.setItem("productList", JSON.stringify([object]));
    }
    setName("");
    setPrice(0);
    setSize(0);
    setColor("");
  };

  const handleHideShow = () => {
    setIsShowDetail(!isShowDetail);
  };

  return (
    <div>
      {isShowDetail ? (
        <div onClick={handleHideShow}>Hide this form</div>
      ) : (
        <div onClick={handleHideShow}>Show this form</div>
      )}
      {isShowDetail && (
        <fieldset>
          <legend>Add A New Product</legend>
          <div className="input-product">
            <label>Name : </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-product">
            <label>Price : </label>
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          <div className="input-product">
            <label>Size : </label>
            <input
              type="text"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>

          <div className="input-product">
            <label>Color :</label>
            <input
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div>
            <button onClick={handleClickBtn}>+ Add New</button>
          </div>
        </fieldset>
      )}
      <div>
        List product :<div>{localStorage.getItem("productList")}</div>
      </div>
    </div>
  );
};
export default AddNewProduct;
