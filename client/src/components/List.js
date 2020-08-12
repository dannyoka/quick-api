import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.list.map((person) => (
      <ListItem name={person.name} key={person._id} />
    ));
  }

  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }
}
