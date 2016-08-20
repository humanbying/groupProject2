import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import uuid from 'uuid';

let playersArray = [];

class PlayerStore extends EventEmitter {
  constructor() {
    super();

  AppDispatcher.register(action => {
    switch(action.type) {
      case 'RECEIVE_PLAYERS':
        playersArray = action.players;
        this.emit('CHANGE');
        break;
      case 'CREATE_PLAYER':
        var { player } = action;
        playersArray.push(player)
        this.emit('CHANGE');
        break;
    }
  })
  }
  startListening(cb){
    this.on('CHANGE', cb )
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb )
  }

  getAll() {
    return playersArray;
  }
}

export default new PlayerStore()
