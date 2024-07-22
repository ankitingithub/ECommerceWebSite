import "./Modal.css"
import { createPortal } from "react-dom";

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }
  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(event)=>event.stopPropagation()}>{children} </div>
    </div>, document.body
  );
}

export default Modal;
