import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { useState } from "react";
import initialProducts from "./data/products.json";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const handleAddToCart = (productId, productName, ProductImage) => {
    // let updatedCartItems = cartItems;
    // updatedCartItems = updatedCartItems.concat({
    //   id: productId,
    //   name: productName,
    //   image: ProductImage,
    //   quantity: 1,
    // });
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) {
      const cartItem = {
        id: productId,
        name: productName,
        image: ProductImage,
        quantity: 1,
      };
      setCartItems((state) => [...state, cartItem]);
    } else {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
    //setCartItems(updatedCartItems);
  };

  function openCart() {
    setShowCart(true);
  }

  function closeCart() {
    setShowCart(false);
  }

  function openAddProduct() {
    setShowAddProduct(true);
  }

  function closeAddProduct() {
    setShowAddProduct(false);
  }

  const onIncQuantity = (productId) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) return;
    const updatedCartItems = [...cartItems];
    updatedCartItems[productInCartIndex].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const onDecQuantity = (productId) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) return;
    const qty = cartItems[productInCartIndex].quantity;
    let updatedCartItems = [...cartItems];
    if (qty === 1) {
      updatedCartItems = updatedCartItems.filter(
        (item) => item.id !== productId
      );
    } else {
      updatedCartItems[productInCartIndex].quantity -= 1;
    }
    setCartItems(updatedCartItems);
  };

  const handleAddProduct = (productName) => {
    // console.log(productName);
    const product = {
      id: products.length + 1,
      name: productName,
      image: "default_product.png",
    };
    setProducts((state)=>[...state,product]);
    //setShowAddProduct(false);
    closeAddProduct();
  };

  return (
    <>
      <Header openCart={openCart} openAddProduct={openAddProduct} />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onIncQuantity={onIncQuantity}
        onDecQuantity={onDecQuantity}
      ></Cart>
      <AddProduct
        showAddProduct={showAddProduct}
        onCloseAddProduct={closeAddProduct}
        onAddProduct={handleAddProduct}
      />
    </>
  );
}

export default App;
