import {
  GET_USER_BY_ID,
  UPDATE_USER,
  CHANGE_PASSWORD_USER,
} from '../actions/types';
const initialState = { isNull: true, user: [], message: null };

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_BY_ID:
      return {
        ...state,
        isNull: false,
        user: payload.data,
      };
    case UPDATE_USER:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil Update User',
      };
    case CHANGE_PASSWORD_USER:
      return {
        ...state,
        isNull: false,
        message: 'Berhasil Update Password User',
      };

    default:
      return state;
  }
};

export default user;
