import React,{Fragment} from 'react';
import FileFieldHOC from "../FileFieldHOC/FileFieldHOC";
import {Row} from "shards-react";
import CustomFileUpload from "../components-overview/CustomFileUpload";

const ImageField = ({uploadFile, input, meta}) => {
  return (
    <Fragment>
      <Row noGutters>
        <img
          width="100%"
          height="auto"
          src={input.value && input.value.preview || input.value}
          className="pb-2"
        >
        </img>
      </Row>
      <Row noGutters>
        <CustomFileUpload  meta={meta} onChange={uploadFile}/>
      </Row>
    </Fragment>
  );
};

export default FileFieldHOC(ImageField);
