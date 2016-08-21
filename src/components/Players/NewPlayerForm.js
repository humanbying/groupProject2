import React, { Component } from 'react';
import PlayerActions from '../../actions/PlayerActions';

export default class NewPlayerForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    }

    this.changePlayerInput = this.changePlayerInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  changePlayerInput(e) {
    this.setState({name: e.target.value})
  }

  submit(e) {
    e.preventDefault();
    let name = {name: this.state.name};
    PlayerActions.createPlayer(name);
    this.setState({name: ""});
  }

  render() {
    return (
      <div>
        <h3>Add New Player</h3>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Name: </label>
            <input type="text"
              className="form-control"
              placeholder="John Doe"
              onChange={this.changePlayerInput}
              value={this.state.name}
            />
          </div>
          <button type="submit" className="btn btn-success btn-xs">+</button>
        </form>
      </div>
    )
  }
}
