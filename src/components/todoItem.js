import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  // methods
  getStyle = () => {
    return {
      background: "#f5f5f5",
      padding: "1rem",
      borderBottom: ".1rem #aaaa groove",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  markComplete = (e) => {
    console.log("from todoItem: ", this.props);
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        {/* using an expression  */}
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}
// @ts-ignore
          style={btnDelete}>x</button>
        </p>
      </div>
    );
  }
}

//  PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

//   variable bassed css
// const itemStyle = {
//     backgroundColor: '#f5f5f5'
// }

const btnDelete = {
  background: 'none',
  color: '#ff0000',
  fontSize: '1.2rem',
  border: 'none',
  padding: '1px 10px',
  cursor: 'pointer',
  float: 'right'
};
export default TodoItem;
