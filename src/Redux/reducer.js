import { SINGLE_USER, USER_DATA, USER_ERROR, USER_LOADING } from "./action";

const initialState = {
  loading: false,
  user: [],
  error: false,
  singleUser: [],
};

export const userReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return { ...store, loading: true };
    case USER_DATA:
      return { ...store, user: [...payload], loading: false, error: false };
    case USER_ERROR:
      return { ...store, error: true };
    case SINGLE_USER:
      return { ...store, singleUser: [payload] };
    default:
      return store;
  }
};
