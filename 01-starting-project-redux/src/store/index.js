import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1, showCounter: state.showCounter  };
  }
  if (action.type === "INCREMENTBYVALUE") {
    return {
      counter: state.counter + action.val,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "SHOWTOGGLE") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
