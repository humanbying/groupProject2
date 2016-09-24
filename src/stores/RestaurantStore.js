import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import uuid from 'uuid';

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
      case 'RECEIVE_ONE_RESTAURANT':
        var { restaurant } = action;
        _restaurants.push(restaurant);
        this.emit('CHANGE');
        break;
      case 'CREATE_RESTAURANT':
        var { restaurant } = action;
        _restaurants.push(restaurant);
        this.emit('CHANGE');
        break;
      case 'DELETE_RESTAURANT':
        let { id } = action;
        _restaurants = _restaurants.filter(function(restaurant) {
          return (restaurant._id !== id);
         })
        this.emit('CHANGE');
        break;
      case 'UPDATE_RESTAURANT':
        _restaurants = _restaurants;
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
