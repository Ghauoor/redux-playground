import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);

  const count = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  console.log(count);
  return (
    <nav className="navbar">
      <h1 className="banner">E-Commerce</h1>
      <div className="right-layout">
        <div className="cart-layout">
          <AiOutlineShoppingCart className="cart-icon" />
          <h3 className="cart-count">{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
