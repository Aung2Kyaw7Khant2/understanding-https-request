import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Confirm,
  Dimmer,
  Loader,
  Menu,
  Segment,
  Table,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './menu.module.scss';
import Header from '../../components/header/Header';
import { deleteMovie, getAllMovies } from '../../service/movie/movieAction';

const Movies = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.data);
  const isLoading = useSelector((state) => state.movieReducer.isLoading);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div className={styles.movienew}>
      <Menu className={styles.menu}>
        <Menu.Item
          name="new movie"
          className={styles.menuItem}
          onClick={() => history.push('/movies/new')}
        >
          New Movie
        </Menu.Item>
      </Menu>

      <Header title="Movie Lists" />
      <Segment padded="very">
        {isLoading ? (
          <Segment style={{ height: 500 }}>
            <Dimmer active>
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        ) : (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Screen Time</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {_.map(movies, (movie, index) => (
                <Table.Row dey={index}>
                  <Table.Cell>{movie.name}</Table.Cell>
                  <Table.Cell>{movie.description}</Table.Cell>
                  <Table.Cell>{movie.screentime}</Table.Cell>
                  <Table.Cell>
                    <Button.Group>
                      <Button
                        color="blue"
                        onClick={() => history.push(`/movies/${index}/edit`)}
                      >
                        Edit
                      </Button>

                      <Button
                        color="red"
                        onClick={() => {
                          setSelectedId(index);
                          setOpen(true);
                        }}

                        // eslint-disable-next-line react/jsx-curly-newline
                      >
                        Delete
                      </Button>
                    </Button.Group>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </Segment>
      <Confirm
        open={open}
        content="Are you sure?"
        onCancel={() => setOpen(false)}
        onConfirm={
          () =>
            dispatch(
              deleteMovie(selectedId, () => {
                setOpen(false);
                dispatch(getAllMovies());
              })
            )
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
    </div>
  );
};

export default Movies;
