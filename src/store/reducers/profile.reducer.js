import * as ProfileConstants from "../constants/profile.constants";

const profileReducer = (state = {
  photo: undefined,
  email: undefined
}, action) => {
  switch (action.type){
    case ProfileConstants.LOAD_PROFILE_PHOTO:
    case ProfileConstants.TOGGLE_PROFILE_PHOTO:
      return {
        ...state,
        photo: action.payload.photo,
        email: action.payload.email
      };
    default: return state;
  }
};

export default profileReducer;