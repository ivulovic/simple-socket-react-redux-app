import {combineReducers} from "redux";
import authReducer from "./auth.reducer";
import profileReducer from "./profile.reducer";
import recordsReducer from "./record.reducer";

const reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  records: recordsReducer
});

export default reducers;