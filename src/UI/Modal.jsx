import ReactDOM from "react-dom";
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
