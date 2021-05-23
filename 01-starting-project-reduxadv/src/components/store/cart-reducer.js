import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], total: 0 };

// { id: 'sad', title: 'Test Item', quantity: 3, total: 18, price: 6 }

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      if (state.cartItems.findIndex((item) => item.id === action.payload.id) < 0){
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
          total: action.payload.price,
        });
        state.total = state.total + action.payload.price;
      }
      console.log(action.payload);
    },
    increaseItemByOne(state, action) {

        const index = state.cartItems.findIndex((item) => item.id === action.payload);

        state.cartItems[index].quantity += 1;
        state.cartItems[index].total += state.cartItems[index].price;
        
        state.total = state.total + state.cartItems[index].price;
        console.log(action.payload);

    },
    decreaseItemByOne(state, action) {

        const index = state.cartItems.findIndex((item) => item.id === action.payload);
        const price = state.cartItems[index].price;
        if(state.cartItems[index].quantity === 1){
            
        
            state.cartItems.splice(index,1);
        }else{
            state.cartItems[index].quantity -= 1;
            state.cartItems[index].total -= state.cartItems[index].price;
        }
        state.total = state.total - price;

        console.log(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
