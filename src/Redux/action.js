export const USER_LOADING = "USER_LOADING";
export const USER_DATA = "USER_DATA";
export const USER_ERROR = "USER_ERROR";
export const SINGLE_USER = "SINGLE_USER";

export const userLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const userData = (payload) => {
  return {
    type: USER_DATA,
    payload,
  };
};

export const userError = () => {
  return {
    type: USER_ERROR,
  };
};

export const singleUserData = (payload) => {
  return {
    type: SINGLE_USER,
    payload,
  };
};

// export const getUserData = () => (dispatch) => {
//   dispatch(userLoading());
//   fetch("https://reqres.in/api/users")
//     .then((res) => res.json())
//     .then((res) => userData(res))
//     .catch((err) => dispatch(userError()));
// };
