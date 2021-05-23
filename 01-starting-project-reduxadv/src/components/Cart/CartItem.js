import classes from './CartItem.module.css';
import {cartActions} from '../store/cart-reducer'
import {useDispatch} from 'react-redux'

const CartItem = (props) => {
  const { id,title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addFromCartHandler = () => {

    dispatch(cartActions.increaseItemByOne(id));

  }
  
  const removeFromCartHandler = () => {

    dispatch(cartActions.decreaseItemByOne(id));

  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button onClick={addFromCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
