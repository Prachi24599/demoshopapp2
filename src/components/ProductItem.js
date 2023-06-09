import ProductDate from "./ProductDate";
import Card from "./Card";
import "./ProductDate.css";

const ProductItem = (props) => {
  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-item__description">
        <h2>Nirma</h2>
      </div>
    </Card>
  );
};

export default ProductItem;
