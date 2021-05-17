import React, { useReducer } from "react";
import CartContex from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const indexOfObject = state.items.findIndex(
      (item) => item.id === action.cartItem.id
    );
    const chosenItem = state.items[indexOfObject];

    let newItemArray;
    // console.log(chosenItem)
    if (chosenItem) {
      const newItem = {
        ...chosenItem,
        amount: chosenItem.amount + action.cartItem.amount,
      };
      newItemArray = [...state.items];
      newItemArray[indexOfObject] = newItem;
      // console.log("exists")
    } else {
        newItemArray = state.items.concat(action.cartItem);
        // newItemArray = state.items.concat([{ ...action.cartItem }]);
      // console.log("Not exists")
    }
    console.log(newItemArray);
    return {
      items: newItemArray,
      totalAmount:
        state.totalAmount + action.cartItem.price * action.cartItem.amount,
    };
  }
    if (action.type === "REMOVE") {

        const itemIndex = state.items.findIndex(item => item.id === action.id)
        let newItems = [...state.items];
        const price = newItems[itemIndex].price;
        if(state.items[itemIndex].amount < 2){
            newItems.splice(itemIndex,1)
        }else{
            newItems[itemIndex].amount -= 1;
        }

      return {
        items: newItems,
        totalAmount: state.totalAmount - price,
      };
    }

  return { items: [], totalAmount: 0 };
};

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCartHandler = (item) => {
    cartDispatcher({ type: "ADD", cartItem: item });
  };
  const removeItemFromCartHandler = (id) => {
    cartDispatcher({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
