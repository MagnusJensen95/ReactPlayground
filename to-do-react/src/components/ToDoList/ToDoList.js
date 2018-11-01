import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItemCustom from "./ListItem";
import './ToDoList.css';
import Divider from '@material-ui/core/Divider';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        {
          title: "Do the dishes",
          completed: false
        },
        {
          title: "Cook Dinner",
          completed: false
        },
        {
          title: "Become React Developer",
          completed: false
        },
        {
          title: "Learn proper javascript",
          completed: false
        }


      ],
      nextToDo: ""
    };
  }

  changeListItem = (index, newTitle) => {
    let listItemsUpdated = this.state.listItems;

    console.log(index);
    console.log(listItemsUpdated);

    listItemsUpdated[index].title = newTitle;
    this.setState((state) => ({
      listItems: listItemsUpdated
    }));
  }


  render() {
    const items = this.state.listItems;
    const listItems = items.map((elm, idx) => {

      return (
        <div key={idx}>
          <ListItemCustom item={elm} index={idx} updateTitle={this.changeListItem} />
          {idx < items.length - 1 ? <Divider /> : <></>}

        </div>
      )
    });

    return <List className="list-main-container">{listItems}</List>;
  }
}
