import axios from 'axios';
import {
  CREATE_MOVIE,
  GET_ALL_MOVIES,
  DELETE_MOVIE,
  GET_ONE_MOVIE,
  EDIT_MOVIE,
} from './movieActionTypes';

export const createMovie = (data) => async (dispatch) => {
  const url = 'https://movie-bb877.firebaseio.com/.json';
  try {
    dispatch({
      type: CREATE_MOVIE,
      meta: {
        isLoading: true,
        hasError: false,
      },
    });
    await axios.post(url, data);
    dispatch({
      type: CREATE_MOVIE,
      meta: {
        isLoading: false,
        hasError: false,
      },
    });
  } catch (error) {
    dispatch({
      type: CREATE_MOVIE,
      meta: {
        isLoading: false,
        hasError: true,
      },
    });
  }
};

export const getAllMovies = () => async (dispatch) => {
  const url = 'https://movie-bb877.firebaseio.com/.json';
  try {
    dispatch({
      type: GET_ALL_MOVIES,
      payload: null,
      meta: {
        isLoading: true,
        hasError: false,
      },
    });
    const response = await axios.get(url);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: response.data,
      meta: {
        isLoading: false,
        hasError: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_MOVIES,
      meta: {
        isLoading: false,
        hasError: true,
      },
    });
  }
};

export const deleteMovie = (id, onSuccess) => async (dispatch) => {
  const url = `https://movie-bb877.firebaseio.com/${id}.json`;
  try {
    dispatch({
      type: DELETE_MOVIE,
      meta: {
        isLoading: true,
        hasError: false,
      },
    });
    await axios.delete(url);
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
    dispatch({
      type: DELETE_MOVIE,
      meta: {
        isLoading: false,
        hasError: false,
      },
    });
  } catch (error) {
    dispatch({
      type: DELETE_MOVIE,
      meta: {
        isLoading: false,
        hasError: true,
      },
    });
  }
};

export const getOneMovie = (id) => async (dispatch) => {
  const url = `https://movie-bb877.firebaseio.com/${id}.json`;
  try {
    dispatch({
      type: GET_ONE_MOVIE,
      meta: {
        isLoading: true,
        hasError: false,
      },
    });
    const response = await axios.get(url);
    dispatch({
      type: GET_ONE_MOVIE,
      payload: response.data,
      meta: {
        isLoading: false,
        hasError: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_MOVIE,
      meta: {
        isLoading: false,
        hasError: true,
      },
    });
  }
};

export const editMovie = (id, data, onSuccess) => async (dispatch) => {
  const url = `https://movie-bb877.firebaseio.com/${id}.json`;
  try {
    dispatch({
      type: EDIT_MOVIE,
      meta: {
        isLoading: true,
        hasError: false,
      },
    });
    await axios.put(url, data);
    if (typeof onSuccess === 'function') {
      onSuccess();
    }
    dispatch({
      type: EDIT_MOVIE,
      meta: {
        isLoading: false,
        hasError: false,
      },
    });
  } catch (error) {
    dispatch({
      type: EDIT_MOVIE,
      meta: {
        isLoading: false,
        hasError: true,
      },
    });
  }
};
