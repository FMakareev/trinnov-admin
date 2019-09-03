import {CreateDOMElement} from "../../utils/createDOMElement";
import Header from "@editorjs/header";
import Paragraph from "../paragraph";
import IconGrid from "../gridTextBlock/iconGrid";
import ImageTool from "../imageTool";


export class TitleWithTextWithLogo {

  _data = {};

  view = {
    wrapper: null,
    header: null,
    text: null,
    image: null,
  };

  api = null;
  config = null;

  static get toolbox() {
    return {
      title: 'Title, text, logo',
      icon: IconGrid,
    };
  }


  constructor({api, data, config}) {
    this.api = api;
    this.data = data;
    this.config = config;

    this.Image = new ImageTool({
      api,
      data,
      config: {
        ...config,
        endpoints: {
          byFile: '/api/gallery/',
          byUrl: '/api/gallery/',
        }
      }
    });
  }

  set data(data) {
    console.log(data);
    this._data = data;
  }

  get data() {
    console.log(this._data);
    return this._data;
  }

  createLayout() {
    this.view.wrapper = CreateDOMElement({
      tagName: 'div',
      classNames: ['row']
    });
    const columnHeader = CreateDOMElement({
      tagName: 'div',
      classNames: ['col-md-3']
    });
    const columnImage = CreateDOMElement({
      tagName: 'div',
      classNames: ['col-md-3']
    });
    const columnText = CreateDOMElement({
      tagName: 'div',
      classNames: ['col-md-6']
    });


    let headerContent = '';
    let textContent = '';
    if (this._data) {
      headerContent = this._data.header;
      textContent = this._data.text;
    }

    this.view.header = new Header({
      data: {
        text: headerContent,
        level: 6,
      },
      api: this.api,
      config: {
        placeholder: 'Enter title',
        level: 6
      }
    });
    this.view.text = new Paragraph({
      data: {
        text: textContent,
      },
      api: this.api,
      config: {
        placeholder: 'Enter text'
      }
    });

    columnHeader.appendChild(this.view.header._element);
    columnText.appendChild(this.view.text._element);
    columnImage.appendChild(this.Image.ui.nodes.wrapper);

    this.view.wrapper.appendChild(columnHeader);
    this.view.wrapper.appendChild(columnText);
    this.view.wrapper.appendChild(columnImage);

    try {
      this.Image.ui.customRender({file: {}})
    } catch (e) {
      console.log(e);
    }

    return this.view.wrapper;
  }

  render() {
    return this.createLayout();
  }

  save() {
    return {
      header: this.view.header._element.innerHTML,
      text: this.view.text._element.innerHTML,
      ...this.Image.publicSave(),
    }
  }

}
