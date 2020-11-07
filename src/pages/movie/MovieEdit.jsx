import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Header, Menu, Segment } from 'semantic-ui-react';
import MovieForm from './components/MovieForm';
import styles from './menu.module.scss';
import { editMovie, getOneMovie } from '../../service/movie/movieAction';

const MovieEdit = (props) => {
  const { id } = props.match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const onFormSubmit = (data) => {
    dispatch(
      editMovie(id, data, () => {
        history.goBack();
      })
    );
  };

  useEffect(() => {
    dispatch(getOneMovie(id));
  }, [dispatch]);
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
      <Header title="Edit Movie" />
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
const mapStateToProps = ({ movieReducer }) => {
  return {
    initialValues: movieReducer.data,
  };
};

export default connect(
  mapStateToProps,
  null
)(reduxForm({ form: 'EditForm', enableReinitialize: true })(MovieEdit));
