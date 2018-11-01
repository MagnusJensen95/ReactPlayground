import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import "./ListItem.css";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SavedListItem = (props) => {

  return (<>
    <ListItemText primary={props.title} />
    <ListItemSecondaryAction className="checkbox-margin">
      <Checkbox
        onChange={props.onCheck}
        checked={props.checked}

      />
      <Button mini variant="fab" color="secondary" aria-label="Edit" onClick={props.onEdit}>
        <Icon fontSize="small">edit_icon</Icon>
      </Button>
    </ListItemSecondaryAction>
  </>)
}

const EditableListItem = (props) => {
  let val = props.title;
  return (<>
    <TextField defaultValue={props.title} />
    <ListItemSecondaryAction className="checkbox-margin">
      <Checkbox
        onChange={props.onCheck}
        checked={props.checked}

      />
      <Button mini variant="fab" color="secondary" aria-label="Edit" onClick={() => props.onSave(props.title)}>
        <Icon fontSize="small">check</Icon>
      </Button>
    </ListItemSecondaryAction>
  </>)
}

export default class ListItemCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      editing: false,

    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleToggle = () => {
    this.setState(state => ({
      checked: !state.checked
    }));

  }

  handleEditClick = () => {
    this.setState(() => ({
      editing: true
    }));

  }

  handleSaveClick = (newTitle) => {
    console.log(newTitle);


    this.props.updateTitle(this.props.index, newTitle)
    this.setState(() => ({
      editing: false
    }));

  }



  render() {
    return <ListItem className="list-item">
      {this.state.editing ?


        <EditableListItem title={this.props.item.title} onSave={(newTitle) => this.handleSaveClick(newTitle)} onCheck={this.handleToggle} />

        :

        <SavedListItem title={this.props.item.title} onEdit={this.handleEditClick} onCheck={this.handleToggle} />

      }

    </ListItem>;
  }
}
