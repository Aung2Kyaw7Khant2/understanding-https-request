import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { Menu, Grid, Segment } from 'semantic-ui-react';
import Header from '../../components/header/Header';
import { createMovie } from '../../service/movie/movieAction';
import MovieForm from './components/MovieForm';
import styles from './menu.module.scss';

const MovieNew = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { reset } = props;

  const onFormSubmit = (data) => {
    dispatch(createMovie(data));
    reset();
  };
  return (
    <div className={styles.movienew}>
      <Menu className={styles.menu}>
        <Menu.Item
          name="goBack"
          className={styles.menuItem}
          onClick={() => history.goBack()}
        >
          Back
        </Menu.Item>
      </Menu>
      <Header title="Enter New Movie" />
      <Grid>
        <Grid.Row>
          <Grid.Column computer={6} />
          <Segment padded>
            <MovieForm onFormSubmit={onFormSubmit} {...props} />
          </Segment>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: 'MovieNew',
})(MovieNew);
