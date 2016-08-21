import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import uuid from 'uuid';

let _players = [];

class PlayerStore extends EventEmitter {
  constructor() {
    super();

  AppDispatcher.register(action => {
    switch(action.type) {
      case 'RECEIVE_PLAYERS':
        _players = action.players;
        this.emit('CHANGE');
        break;
      case 'RECEIVE_ONE_PLAYER':
        var { player } = action;
        _players.push(player);
        this.emit('CHANGE');
        break;
      case 'CREATE_PLAYER':
        var { player } = action;
        _players.push(player);
        this.emit('CHANGE');
        break;
      case 'DELETE_PLAYER':
        let { id } = action;
        _players = _players.filter(function(player) {
          return (player._id !== id);
         })
        this.emit('CHANGE');
        break;
      case 'UPDATE_PLAYER':
        _players = _players;
        this.emit('CHANGE');
        break;
    }
  })
  }
  startListening(cb) {
    this.on('CHANGE', cb)
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb)
  }

  getAll() {
    return _players;
  }
}

export default new PlayerStore();
