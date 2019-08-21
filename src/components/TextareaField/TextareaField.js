import React from 'react';
import {FormTextarea} from "shards-react";

export const TextareaField = ({placeholder, className, disabled, input, type, meta: {touched, error,submitError}, ...rest}) => {
  return (
    <div className={className}>
      <FormTextarea
        disabled={disabled}
        invalid={touched &&( error || submitError)}
        placeholder={placeholder}
        type={type}
        {...input}
        {...rest}
      />
      {
        touched && error || submitError &&
        <div className="invalid-feedback">
          {error||submitError}
        </div>
      }
    </div>
  );
};

export default TextareaField;
