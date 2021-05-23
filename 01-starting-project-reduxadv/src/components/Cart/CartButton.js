import classes from "./CartButton.module.css";
import { uiAction } from "../store/ui-reducer";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatcher = useDispatch();
  const cartTotal = useSelector((state) =>
    state.cartReducer.cartItems.reduce((init, item) => init + item.quantity, 0)
  );
  const showCartHandler = () => {
    dispatcher(uiAction.toggleCart());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;
