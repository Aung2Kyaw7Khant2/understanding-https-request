import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movieReducer from '../service/movie/movieReducer';

const rootReducer = combineReducers({
  movieReducer,
  form: formReducer,
});

export default rootReducer;
