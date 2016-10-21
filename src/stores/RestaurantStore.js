import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';

let _restaurants = [];

class RestaurantStore extends EventEmitter {
  constructor() {
    super();

  AppDispatcher.register(action => {
    switch(action.type) {
      case 'RECEIVE_RESTAURANTS':
        _restaurants = action.restaurants;
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
    return _restaurants;
  }
}

export default new RestaurantStore();
