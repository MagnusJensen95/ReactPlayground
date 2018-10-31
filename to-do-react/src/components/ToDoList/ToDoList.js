import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "./ListItem";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        "Do the dishes",
        "Cook Dinner",
        "Become React Developer",
        "Learn proper javascript"
      ],
      nextToDo: ""
    };
  }
  render() {
    const items = this.state.listItems;
    const listItems = items.map((elm, idx) => (
      <ListItem item={elm} key={idx} />
    ));

    return <List>{listItems}</List>;
  }
}
