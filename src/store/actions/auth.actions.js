import * as AuthConstants from "../constants/auth.constants";
export const login = () => {
  return {
    type: AuthConstants.LOGIN,
    payload: true
  }
};