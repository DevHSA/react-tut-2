import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const modalClass = `Modal ${
    props.show === "entering"
      ? "ModalOpen"
      : props.show === "exiting"
      ? "ModalClose"
      : null
  }`;

  console.log(modalClass);

  return (
    <div className={modalClass}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
