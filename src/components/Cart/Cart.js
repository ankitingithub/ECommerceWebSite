import Modal from "../UI/Modal" 


function Cart({ showCart, closeCart }) {
  return (
    <Modal show={showCart} onClose={closeCart}>
      Hello From Modal
    </Modal>
  );
}

export default Cart;
