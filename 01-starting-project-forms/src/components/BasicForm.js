import { useState } from "react";
import useInp from "../hooks/use-inp";

const BasicForm = (props) => {
  const {
    value: fnameValue,
    valid: fnameValid,
    error: fnameError,
    setInputHandler: setNameInputHandler,
    setTouchedHandler: setNameTouchedHandler,
  } = useInp((value) => value.trim() !== "");

  let formIsValid;

  formIsValid = fnameValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
  };

 
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameError ? "form-control invalid" : "form-control"}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            
            value={fnameValue}
            onChange={setNameInputHandler}
            onBlur={setNameTouchedHandler}
          />
          {fnameError && (
            <div className="error-text">Please Enter First Name</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
