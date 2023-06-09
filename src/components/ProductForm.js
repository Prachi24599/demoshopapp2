import { useState } from "react";
import "./ProductForm.css";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setDate(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form>
      <div className="new-product__title">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}></input>
      </div>
      <div className="new-product__date">
        <label>Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2023-12-12"
          onChange={dateChangeHandler}
        ></input>
      </div>
      <div className="new-product__button">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}
export default ProductForm;
