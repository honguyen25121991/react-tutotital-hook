import { useState } from "react";

const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [isShowDetail, setIsShowDetail] = useState(true);
  const handleClickBtn = () => {
    let object = {
      name,
      price,
      size,
      color,
    };
    console.log(">>> Check data", object);
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
    </div>
  );
};
export default AddNewProduct;
