import React from 'react';
import {Button} from "shards-react";

export const PublishButton = ({input,onClick}) => {
  if (input.value) {
    return (
      <Button
        type={'button'}
        theme="accent"
        size="sm"
        className="ml-auto"
        onClick={() => {
          input.onChange(false);
          onClick(false);
        }}
      >
        <i className="material-icons">
          file_copy
        </i>
        Un publish
      </Button>
    );
  } else {
    return (
      <Button
        type={'button'}
        theme="accent"
        size="sm"
        className="ml-auto"
        onClick={() => {
          input.onChange(true);
          onClick(true);
        }}
      >
        <i className="material-icons">
          file_copy
        </i>
        Publish
      </Button>
    );
  }

};

export default PublishButton;
