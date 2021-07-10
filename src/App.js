import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodoList } from "./actions/todoList";
import List from "./components/ListComponent";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getTodoList();
  }

  render() {
    const { list } = this.props;
    console.log(list);
    return (
      <React.Fragment>
        <div className="App">
          <h1>TODOS</h1>
          <h2>List</h2>
        </div>
        <List list={list} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  };
}

export default connect(mapStateToProps, { getTodoList })(App);
