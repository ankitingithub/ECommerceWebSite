import Modal from "../UI/Modal";
import "./AddProduct.css";
import { useRef, useState } from "react";

function AddProduct({ showAddProduct, onCloseAddProduct, onAddProduct }) {
  //   const nameRef = useRef();

  const [productName, setProductName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //const nameValue = nameRef.current.value;
    //onAddProduct(nameValue);
    onAddProduct(productName);
  }

  const handleProductNameChange = (event) => {
    const enteredName = event.target.value;
    //console.log(enteredName);
    setProductName(enteredName);
  };

  return (
    <Modal show={showAddProduct} onClose={onCloseAddProduct}>
      <div className="add-product-container">
        <div className="add-product-heading">Add Product</div>
        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-label">Enter Product Name</div>
          {/* <input className="form-input" name="product name" ref={nameRef} /> */}
          <input className="form-input" value={productName} onChange={handleProductNameChange} />
          <button type="submit" className="yellow-button submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
