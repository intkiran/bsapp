// combine all reducers

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import UserReducer from "./user";
import TaskReducer from "./task";

const appReducer = combineReducers({
  users: UserReducer,
  tasks: TaskReducer

});

const rootReducer = (state, action) => {
  const re = appReducer(state, action);
  return re;
};

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: []
};

const reducers = persistReducer(persistConfig, rootReducer);

export default reducers;
