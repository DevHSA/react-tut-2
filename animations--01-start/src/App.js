import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";

class App extends Component {
  state = {
    show: false,
    showToggle: false,
  };

  openModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  showToggleHandler = () => {
    this.setState((prevState) => ({
      showToggle: !prevState.showToggle,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.showToggleHandler}>
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showToggle}
          timeout={1300}
          mountOnEnter
          unmountOnExit

          onEnter={()=>console.log("onEnter")}
          onEntering={()=>console.log("onEntering")}
          onEntered={()=>console.log("onEntered")}
          onExit={()=>console.log("onExit")}
          onExiting={()=>console.log("onExiting")}
          onExited={()=>console.log("onExited")}
          

        >
          {(state) => (
            <div
              style={{
                width: "200px",
                height: "200px",
                margin: "auto",
                backgroundColor: "red",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            >
              {state}
            </div>
          )}
        </Transition>

          <Modal show={this.state.show} closed={this.closeModal} />
 
        {this.state.show && <Backdrop show={this.state.show} />}

        <button className="Button" onClick={this.openModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
