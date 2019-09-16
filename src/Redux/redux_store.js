import { createStore, combineReducers } from "redux";
import friendsReducer from './Reducers/friendsReducer';
import groupsReducer from './Reducers/groupsReducer';
import messagesReducer from './Reducers/messagesReducer';
import musicReducer from './Reducers/musicReducer';
import profileReducer from './Reducers/profileReducer';
import settingsReducer from './Reducers/settingsReducer';
import usersReducer from './Reducers/usersReducer';
import authLoginReducer from './Reducers/authLoginReducer';

let state = {};

let reducers = combineReducers({
  friendsReducer,
  groupsReducer,
  messagesReducer,
  musicReducer,
  profileReducer,
  settingsReducer,
  usersReducer,
  authLoginReducer,
});

let store = createStore(reducers, state);
window.store = store;

export default store;