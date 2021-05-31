import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import "./List.css";

class List extends Component {
  state = {
    items: [{val:1, id:Math.random()}, {val:2, id:Math.random()}, {val:3, id:Math.random()}],
  };

  addItemHandler = () => {
    console.log("ADD");
    this.setState((prevState) => {
      return {
        items: prevState.items.concat({val: prevState.items.length + 1, id:Math.random()}),
      };
    });
  };

  removeItemHandler = (itemId) => {
    console.log("SUBTRACT");
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => itemId !== item.id),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item) => (
      <CSSTransition
        key={item.id}
        // classNames="fade"
        timeout={300}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
      >
        <li className="ListItem" onClick={() => this.removeItemHandler(item.id)}>
          {item.val}
        </li>
      </CSSTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;
