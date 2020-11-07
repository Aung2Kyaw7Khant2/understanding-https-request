import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Divider, Form } from 'semantic-ui-react';
import Field from '../../../components/fields/Field';

const MovieForm = (props) => {
  const isLoading = useSelector((state) => state.movieReducer.isLoading);
  const { handleSubmit, onFormSubmit, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Field name="name" label="Name" />
      <Field name="description" label="Description" />
      <Field name="screentime" label="Screen Time" />
      <Divider />
      <Button color="red" disabled={pristine || submitting}>
        Reset
      </Button>
      <Button
        color="blue"
        disabled={pristine || submitting || isLoading}
        loading={isLoading}
      >
        Save
      </Button>
    </Form>
  );
};

export default MovieForm;
