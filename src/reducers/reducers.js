import { combineReducers } from 'redux';
import {
    SHOW_NEW_ITEM_MESSAGE,
    HIDE_NEW_ITEM_MESSAGE,
    SHOW_EMPTY_VALUE_MESSAGE,
    HIDE_EMPTY_VALUE_MESSAGE,
    GET_ITEMS_SUCCESS
} from '../actions/index';

function itemsIn(state = {}, action) {
    switch (action.type) {
       case SHOW_NEW_ITEM_MESSAGE:
          return Object.assign({}, state, {
              showSuccessMessage: true
          });
       case HIDE_NEW_ITEM_MESSAGE:
          return Object.assign({}, state, {
              showSuccessMessage: false
          });
       case SHOW_EMPTY_VALUE_MESSAGE:
          return Object.assign({}, state, {
              showEmptyValueMessage: true
          });
       case HIDE_EMPTY_VALUE_MESSAGE:
          return Object.assign({}, state, {
              showEmptyValueMessage: false
          });
       default:
          return state;
    }
}

function itemsOut(state = {
    items: []
}, action) {
    switch (action.type) {
       case GET_ITEMS_SUCCESS:
          return Object.assign({}, state, {
              items: action.items
          });
        default:
          return state;
    }
}

const rootReducer = combineReducers({
    itemsIn,
    itemsOut
  })
  
export default rootReducer
