import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  handleCheckboxChange = event => {
    this.props.checkboxClicked(this.props.item);
  };

  render() {
    const itemId = "todoitem-checkbox-" + this.props.item.get("id");

    return (
      <div>
        <input
          type="checkbox"
          id={itemId}
          checked={this.props.item.get("completed")}
          onClick={this.handleCheckboxChange}
        />
        <label
          htmlFor={itemId}
          style={
            this.props.item.get("completed")
              ? { textDecoration: "line-through" }
              : {}
          }
        >
          TodoItem: {this.props.item.get("title")}
        </label>
      </div>
    );
  }
}

export default TodoItem;
