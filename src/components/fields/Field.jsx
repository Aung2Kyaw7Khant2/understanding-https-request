import { Field as ReduxField } from 'redux-form';
import React from 'react';

const renderField = (fields) => {
  const { label, input } = fields;
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input placeholder={label} {...input} />
    </>
  );
};

const Field = (props) => {
  const { name, label } = props;
  return (
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      <ReduxField name={name} component={renderField} label={label} />
    </div>
  );
};

export default Field;
