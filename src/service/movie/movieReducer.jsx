import {
  CREATE_MOVIE,
  DELETE_MOVIE,
  EDIT_MOVIE,
  GET_ALL_MOVIES,
  GET_ONE_MOVIE,
} from './movieActionTypes';

const initialState = {
  isLoading: false,
  hasError: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MOVIE:
    case EDIT_MOVIE:
      return {
        ...state,
        data: action.payload,
        isLoading: action.meta.isLoading,
        hasError: action.meta.hasError,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        isLoading: action.meta.isLoading,
        hasError: action.meta.hasError,
      };
    case GET_ALL_MOVIES:
    case GET_ONE_MOVIE:
      return {
        ...state,
        data: action.payload,
        isLoading: action.meta.isLoading,
        hasError: action.meta.hasError,
      };

    default:
      return state;
  }
}
