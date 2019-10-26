import React, { Component } from "react";
import axios from "axios";

import Todo from "../Todo";

class TodosList extends Component {

  state = {
      todos: []
    }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* { this.todoList() } */}
            {this.state.todos.map((currentTodo, i) => {
              return <Todo todo={currentTodo} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodosList;
