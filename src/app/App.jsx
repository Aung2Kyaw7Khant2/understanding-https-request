import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieEdit from '../pages/movie/MovieEdit';
import MovieNew from '../pages/movie/MovieNew';
import Movies from '../pages/movie/Movies';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/movies/new" component={MovieNew} exact />
          <Route path="/movies/:id/edit" component={MovieEdit} exact />
          <Route path="/" component={Movies} exact />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
