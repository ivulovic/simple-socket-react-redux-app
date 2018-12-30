import {takeLatest} from "redux-saga/effects";
import * as AuthTypes from "../constants/auth.constants";

const effects = function* effects(args) {

  yield takeLatest(AuthTypes.LOGIN, (action) => {
     localStorage.setItem('fakeUserLoggedIn', true)
  });

};
export default effects;