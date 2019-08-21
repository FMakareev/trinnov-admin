import React from 'react';
import {FormTextarea} from "shards-react";

export const TextareaField = ({placeholder, className, disabled, input, type, meta: {touched, error}, ...rest}) => {
  return (
    <div className={className}>
      <FormTextarea
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

export default TextareaField;
