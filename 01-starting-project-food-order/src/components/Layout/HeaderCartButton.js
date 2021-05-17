import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnClasses, setBtnClasses] = useState(`${classes.button}`);
  //   console.log(cartCtx.items);
  const numberOfCartItems = cartCtx.items.reduce((accumulator, currVal) => {
    return currVal.amount + accumulator;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnClasses(`${classes.button} ${classes.bump}`);

    const timer = setTimeout(() => {
      setBtnClasses(`${classes.button}`);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
