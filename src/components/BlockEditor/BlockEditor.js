import React from 'react';
import ReactEditorJs from 'react-editor-js';


const BlockEditor = ({input, EditorRefInstance}) => {
  return (
    <div id={'codex-editor'}>
      <ReactEditorJs
        data={typeof input.value !== 'string' ? input.value : {
          blocks: [
            {
              type: "paragraph",
              data: {
                text: input.value,
              }
            }
          ]
        }}
        instanceRef={(instance) => {
          console.log('instance: ', instance);
          console.log('EditorRefInstance: ', EditorRefInstance);
          EditorRefInstance
          && EditorRefInstance.addEditorRefInstance
          && EditorRefInstance.addEditorRefInstance(instance);
        }}

      />
    </div>
  );
}

export default BlockEditor;
