import React from 'react';
import {FormCheckbox} from "shards-react";

const CheckboxFinalForm = ({label, input}) => {
  return (
    <FormCheckbox {...input}>
      {label}
    </FormCheckbox>
  );
};

export default CheckboxFinalForm;
