import React from "react";
import ReactDOM from "react-dom";

import _ from "lodash";
import Immutable, { Map } from "immutable";

import "./styles.css";

import TodoItem from "./todoItem.jsx";

let item = Map({
  title: "Build App",
  completed: true,
  id: _.uniqueId("item_")
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: item
    };
  }

  toggleTodoItem = item => {
    const newitem = item.set("completed", !item.get("completed"));
    console.log(newitem.get("completed"));
    this.setState({ item: newitem });
  };

  render() {
    return (
      <div className="App">
        <h1>React Todo App</h1>
        <TodoItem
          item={this.state.item}
          checkboxClicked={this.toggleTodoItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
