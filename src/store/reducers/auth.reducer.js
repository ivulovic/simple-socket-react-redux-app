import * as AuthConstants from "../constants/auth.constants";

const authReducer = (state = {
  loggedIn: false
}, action) => {
  switch (action.type){

    case AuthConstants.LOGIN:
      return {
        ...state,
        loggedIn: action.payload
      };

    default: return state;
  }
};

export default authReducer;