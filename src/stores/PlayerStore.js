import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let playersArray = [];

class PlayersStore extends EventEmitter = {
  constructor() {
    super();

  AppDispatcher.register(action => {

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

export default new PlayersStore()
