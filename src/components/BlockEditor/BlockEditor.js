import React from 'react';
import ReactEditorJs from 'react-editor-js';
import classNames from "classnames";


const initData = (value) => {
  if (typeof value === 'string' && value.length > 0) {
    return {
      blocks: [
        {
          type: "paragraph",
          data: {
            text: value,
          }
        }
      ]
    }
  } else if (value && value.blocks) {
    return value;
  } else {
    return {}
  }
};

const BlockEditor = ({input, meta: {touched, error, submitError}, EditorRefInstance}) => {
  return (
    <div
      className={"form-control"}
      style={{
        position: 'relative',
        padding: '.4375rem .75rem .4375rem 1.5rem'
      }}>
      {/* this is for auto focus submitError */}
      <input
        {...input}
        style={{
          position: 'absolute',
          opacity: 0,
        }}
        type="text"
      />
      <div
        style={{display: 'none'}}
        className={classNames("form-control", {
          "is-invalid": true,
        })}
      >
      </div>
      {
        touched && (error || submitError) &&
        <div className="invalid-feedback mb-3">
          {error || submitError}
        </div>
      }
      <ReactEditorJs
        data={initData(input.value)}
        instanceRef={(instance) => {
          EditorRefInstance
          && EditorRefInstance.addEditorRefInstance
          && EditorRefInstance.addEditorRefInstance(instance);
        }}
      />
    </div>
  );
}

export default BlockEditor;
