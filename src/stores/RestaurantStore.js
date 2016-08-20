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

  getAll() {
    return _restaurants;
  }
}

export default new RestaurantStore()
