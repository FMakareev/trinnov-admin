import React from 'react';
import {FormInput} from "shards-react";

export const TextField = ({placeholder, className, disabled, input, type, meta: {touched, error}, ...rest}) => {
  return (
    <div className={className}>
      <FormInput
        disabled={disabled}
        invalid={touched && error}
        placeholder={placeholder}
        type={type}
        {...input}
        {...rest}
      />
      {
        touched && error &&
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      }
    </div>
  );
};

export default TextField;
