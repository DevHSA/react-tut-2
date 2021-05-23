import { createSlice,  } from "@reduxjs/toolkit";

const counterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: counterState,
  reducers: {
    increase(state) {
      state.counter = state.counter + 1;
    },
    decrease(state) {
      state.counter = state.counter - 1;
    },
    changeValue(state, action) {
      state.counter = state.counter + action.payload;
    },
    showToggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;