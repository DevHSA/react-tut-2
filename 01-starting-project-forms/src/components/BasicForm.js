import { useState } from "react";
import useInp from "../hooks/use-inp";

const BasicForm = (props) => {
  const {
    value: fnameValue,
    touched: fnameTouched,
    valid: fnameValid,
    setInputHandler: setNameInputHandler,
    setTouchedHandler: setNameTouchedHandler,
    error: fnameError
  } = useInp((value)=>value.trim() !== '');

  const formValidity =() =>{

    return fnameValid;

  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    formValidity();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" className="invalid" onChange={setNameInputHandler} onBlur={setNameTouchedHandler}/>
          {fnameError && <div className="error-text">Please Enter First Name</div>}
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
