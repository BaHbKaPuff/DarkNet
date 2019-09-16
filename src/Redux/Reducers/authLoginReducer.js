const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isLogin: false
};

const authLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isLogin: true
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, login, email} });

export default authLoginReducer;
