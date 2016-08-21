import React, { Component } from 'react';
import PlayerList from './PlayerList';
import NewPlayerForm from './NewPlayerForm';
import PlayerActions from '../../actions/PlayerActions';
import PlayerStore from '../../stores/PlayerStore';

export default class App extends Component {
  constructor() {
    super();

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
  }

  render() {
    return (
      <div>
        <h2>SELECT PLAYERS FOR NEW GAME</h2>
        <PlayerList />
        <NewPlayerForm />
        <button className="btn btn-primary btn-md">START GAME</button>
      </div>
    )
  }
}
