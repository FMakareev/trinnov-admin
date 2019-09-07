import {CreateDOMElement} from "../../utils/createDOMElement";
import Header from "@editorjs/header";
import Paragraph from "../paragraph";
import IconGrid from "../gridTextBlock/iconGrid";
import {IconTitleWithText} from "./icon";


export class TextWithTitle {

  _data = {};

  view = {
    wrapper: null,
    header: null,
    text: null,
  };

  api = null;
  config = null;

  static get toolbox() {
    return {
      title: 'Title and text',
      icon: IconTitleWithText,
    };
  }


  constructor({api,data,config}) {
    this.api = api;
    this.data = data;
    this.config = config;
  }

  set data(data) {
    console.log(data);
    this._data = data;
  }

  get data() {
    console.log(this._data);
    return this._data;
  }

  openToolbar() {
    this.api.toolbar.open();

    // then do something else
  }

  createLayout() {
    this.view.wrapper = CreateDOMElement({
      tagName: 'div'
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

    this.view.text._element.addEventListener('click',()=>{
      console.log(this.view.text);
      this.view.text.api.toolbar.open();
      // this.view.text.api.inlineToolbar.open();
    });

    this.view.wrapper.appendChild(this.view.header._element);
    this.view.wrapper.appendChild(this.view.text._element);
    return this.view.wrapper;
  }

  render() {
    return this.createLayout();
  }

  save() {
    return {
      header: this.view.header._element.innerHTML,
      text: this.view.text._element.innerHTML,
    }
  }

}
