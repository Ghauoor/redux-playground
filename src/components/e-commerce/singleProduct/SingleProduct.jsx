import { useDispatch, useSelector } from "react-redux";
import "./SingleProduct.css";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const currentItem = cart.find((item) => item.id === product.id);
  const currQuantity = currentItem ? currentItem.quantity : 0;
  return (
    <div className="SingleProduct">
      <img className="productImg" src={product.image} alt={product.title} />

      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="productPrice">${product.price.toFixed(2)}</p>
      </div>
      <div className="cartInfo">
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          -
        </button>
        <h4>{currQuantity}</h4>
        <button
          className="button"
          onClick={() => dispatch(addToCart(product.id))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
