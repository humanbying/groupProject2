import React, { Component } from 'react';

export default class OnePlayer extends Component {
  constructor() {
    super();

    this.open = this.open.bind(this);
    this.select = this.select.bind(this);
  }

  open(e) {
    e.preventDefault();
    this.props.changeId(this.props.playerId, this.props.playerName);
    this.props.openModal();
  }

  select(e) {
    e.preventDefault();
    this.props.selectPlayer(this.props.playerId);
  }

  render() {
    return (
      <ul onClick={this.select} onDoubleClick={this.open}>{this.props.playerName}</ul>
    )
  }
}
