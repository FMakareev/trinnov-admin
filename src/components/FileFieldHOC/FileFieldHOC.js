import React, {Component} from 'react';
import {Logging} from "../../utils/Logging";


const FileFieldHOC = (WrapperComponent) => (class extends Component {
  uploadFile = (event) => {
    try {
      const {input} = this.props;
      const reader = new FileReader();
      const file = event.target.files[0];

      reader.onloadend = function () {
        input && input.onChange({
          file,
          preview: reader.result,
        });
      };
      reader.onerror = () => {
        if (reader.error) {
          Logging(reader.error.toString(), 'error');
        }

      };

      reader.readAsDataURL(file);
    } catch (error) {
      Logging(error, 'error')
    }
  };

  render() {
    return <WrapperComponent uploadFile={this.uploadFile} {...this.props}/>;
  }
})


export default FileFieldHOC;
