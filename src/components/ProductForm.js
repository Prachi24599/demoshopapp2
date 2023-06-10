import { useState } from "react";
import "./ProductForm.css";

function ProductForm(props) {
  /*const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  function titleChangeHandler(event) {
    // console.log(event.target.value);
    setTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    // console.log(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const productData = {
      title: newTitle,
      date: newDate,
    };
    // console.log(productData);
    props.onSave(productData);
    setTitle("");
    setDate("");
  }*/

  //Handling multiple states in single useState hook
  const [state, setState] = useState({
    newTitle: "",
    newDate: "",
  });

  function titleChangeHandler(event) {
    setState((prevState) => ({ ...prevState, newTitle: event.target.value }));
  }

  function dateChangeHandler(event) {
    setState((prevState) => ({ ...prevState, newDate: event.target.value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      title: state.newTitle,
      date: state.newDate,
    };
    props.onSave(productData);
    setState((prevState) => ({ ...prevState, newTitle: "", newDate: "" }));
  }
  return (
    <form onSubmit={submitHandler} className="new-product__controls">
      <div className="new-product__title">
        <label>Title</label>
        <input
          type="text"
          value={state.newTitle}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div className="new-product__date">
        <label>Date</label>
        <input
          type="date"
          value={state.newDate}
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
