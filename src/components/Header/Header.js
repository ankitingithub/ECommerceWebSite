import { useState } from "react";
import "./Header.css";

function Header() {
  const [showCart, setShowCart] = useState(false);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  return (
    <div className="header">
      <h1>my react store</h1>
      <div>
        <button className="yellow-button" onClick={openCart}>
          Cart
        </button>
      </div>
      {showCart && (
        <div className="backdrop" onClick={closeCart}>
          <div className="modal">Hello from cart </div>
        </div>
      )}
    </div>
  );
}
export default Header;
