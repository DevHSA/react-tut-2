import React, {useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {

    const cartCtx = useContext(CartContext)

    const price = `$${props.price.toFixed(2)}`;
     
    const addItemHandler = (amount) => {

        const item = { id: props.id, name:props.name, price:props.price, amount: amount}
        cartCtx.addItem(item);

    }

  return (

    <li className={classes.meal}>
      <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm id={props.id} addItemHandler={addItemHandler}/></div>
    </li>
  
  );
};

export default MealItem;
