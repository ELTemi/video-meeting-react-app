import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import contactsReducer from './reducers/contacts'
import roomsReducer from './reducers/rooms'



const rootReducer = combineReducers({
  contacts: contactsReducer,
  rooms: roomsReducer
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
