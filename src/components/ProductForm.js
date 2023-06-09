import "./ProductForm.css";

function ProductForm() {
  <form>
    <div className="new-product__title">
      <label>Title</label>
      <input type="text"></input>
    </div>
    <div className="new-product__date">
      <label>Date</label>
      <input type="date" min="2023-01-01" max="2023-12-12"></input>
    </div>
    <div className="new-product__button">
      <button type="submit">Add Product</button>
    </div>
  </form>;
}
export default ProductForm;
