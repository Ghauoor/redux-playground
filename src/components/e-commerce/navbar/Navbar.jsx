import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="banner">E-Commerce</h1>
      <div className="right-layout">
        <div className="cart-layout">
          <AiOutlineShoppingCart className="cart-icon" />
          <h3 className="cart-count">4</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
