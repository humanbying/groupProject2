import React, { Component } from 'react';
import PlayerActions from '../../actions/PlayerActions';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      players: PlayerStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    PlayerStore.on('CHANGE', this._onChange);
    PlayerActions.getAllPlayers();
  }

  componentWillUnmount() {
    PlayerStore.removeListener('CHANGE', this_onChange);
  }

  _onChange() {
    this.setState({
      players: PlayerStore.getAll()
    })
  }

  render() {
    return (
      <div>
        <h2>SELECT PLAYERS FOR NEW GAME</h2>
        <PlayerList />
      </div>
    )
  }
}
