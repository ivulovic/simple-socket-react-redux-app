import * as ProfileConstants from "../constants/profile.constants";

export const loadProfilePhoto = (email) => {
  const request = `https://api.adorable.io/avatars/285/${email}`;
  return {
    type: ProfileConstants.LOAD_PROFILE_PHOTO,
    payload: {photo: request, email}
  }
};

export const toggleProfilePhoto = (email) => {
  const request = `https://api.adorable.io/avatars/285/${email}`;
  return {
    type: ProfileConstants.TOGGLE_PROFILE_PHOTO,
    payload: {photo: request, email}
  }
};