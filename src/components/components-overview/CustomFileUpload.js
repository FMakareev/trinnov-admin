import React from "react";
import classNames from 'classnames';
import {Config} from "../../config";

const CustomFileUpload = ({onChange, meta = {}}) => {

  const {touched, error, submitError} = meta;

  return (
    <div className="custom-file mb-3">
      <input
        accept={Config.allowedFileExtensions.join(',')}
        onChange={onChange} type="file"
        className={classNames("custom-file-input form-control", {
          "is-invalid": touched && (error || submitError),
        })}
      />
      <label className="custom-file-label" htmlFor="customFile2">
        Choose file...
      </label>
      {
        touched && (error || submitError) &&
        <div className="invalid-feedback">
          {error || submitError}
        </div>
      }
    </div>
  );
}

export default CustomFileUpload;
