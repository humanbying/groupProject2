import React, { Component } from 'react';
import PlayerActions from '../../actions/PlayerActions';
import PlayerStore from '../../stores/PlayerStore';
import { Modal, Button } from 'react-bootstrap';
import OnePlayer from './OnePlayer';

export default class PlayerList extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      name: "",
      id: "",
      players: PlayerStore.getAll(),
      selectedPlayers: []
    }

    this._onChange = this._onChange.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.changeId = this.changeId.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    //this.selectPlayer = this.selectPlayer.bind(this);
  }

  componentDidMount() {
    PlayerStore.startListening(this._onChange);
    PlayerActions.getAllPlayers();
  }

  componentWillUnmount() {
    PlayerStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      players: PlayerStore.getAll()
    })
  }

  changeId(id, name) {
    this.setState({id: id});
    this.setState({name: name});
  }

  deletePlayer() {
    PlayerActions.deletePlayer(this.state.id);
    this.closeModal();
  }

  updatePlayer() {
    let playerToUpdate = {name: this.state.name};
    PlayerActions.updatePlayer(this.state.id, playerToUpdate);
    this.closeModal();
  }

  closeModal() {
    this.setState({showModal: false});
  }

  openModal() {
    this.setState({showModal: true});
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  // selectPlayer(name) {
  //   let selected = this.state.selectedPlayers;
  //   console.log ('selected:', selected);
  //   if (selected.length > 0) {
  //     for (let i = 0; i < selected.length; i++) {
  //       if (selected[i] !== name) {
  //         selected.push(name);
  //       }
  //     }
  //   } else {
  //     selected.push(name);
  //   }
  //   this.setState({selectedPlayers: selected});
  //   console.log ('this.state.selectedPlayers:', this.state.selectedPlayers);
  // }

  render() {
    const Players = this.state.players.map(player => {
      return (
        <OnePlayer
          key={player._id}
          playerId={player._id}
          playerName={player.name}
          openModal={this.openModal}
          changeId={this.changeId}
          selectPlayer={this.selectPlayer}
        />
      )
    })

    return (
      <div>
        <h2>Player List</h2>
        <ul>
          {Players}
        </ul>

      <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
          <Modal.Title>Update Player</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Name: <input type="text" onChange={this.onInputChange}/></label>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.updatePlayer} className="btn btn-primary btn-sm">Update</Button>
            <Button onClick={this.deletePlayer} className="btn btn-danger btn-sm">Delete</Button>
            <Button onClick={this.closeModal} className="btn btn-default btn-sm">Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
