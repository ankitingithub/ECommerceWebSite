import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";


function App() {
  const [showCart, setShowCart] = useState(false);

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }
  return (
    <div>
      <Header openCart={openCart} />
      <Products />
      <Cart showCart={showCart} closeCart={closeCart}></Cart>
    </div>
  );
}

export default App;
