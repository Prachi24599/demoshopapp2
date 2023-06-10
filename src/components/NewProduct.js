import ProductForm from "./ProductForm";
import "./NewProduct.css";

function NewProduct(props) {
  // console.log(props.prachi);
  // props.prachi("Pinky"); //calling a fun which is received throught props and passing data to parent

  function saveProduct(data) {
    console.log("Inside NewProduct.js");
    console.log(data);
    // data.title = "PPPP"; //will update the title value
    props.prachi(data);
  }

  return (
    <div className="new-product">
      <ProductForm onSave={saveProduct} />
    </div>
  );
}

export default NewProduct;
