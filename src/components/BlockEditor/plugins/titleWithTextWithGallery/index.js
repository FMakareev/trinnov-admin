import {CreateDOMElement} from "../../utils/createDOMElement";
import Header from "@editorjs/header";
import Paragraph from "../paragraph";
import IconGrid from "../gridTextBlock/iconGrid";
import ImageTool from "../imageTool";
import {IconGallery} from "./icon";


export class TitleWithTextWithGallery {

  _data = {};

  view = {
    wrapper: null,
    galleryWrapper: null,
    header: null,
    text: null,
    images: [],
  };

  api = null;
  config = null;

  static get toolbox() {
    return {
      title: 'Title with text and gallery',
      icon: IconGallery,
    };
  }


  constructor({api, data, config}) {
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

  createLayout() {
    this.view.wrapper = CreateDOMElement({
      tagName: 'div',
      classNames: []
    });
    this.view.galleryWrapper = CreateDOMElement({
      tagName: 'div',
      classNames: ['row']
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
        level: 4,
      },
      api: this.api,
      config: {
        placeholder: 'Enter title',
        level: 4
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

    this.view.wrapper.appendChild(this.view.header._element);
    this.view.wrapper.appendChild(this.view.text._element);
    this.view.wrapper.appendChild(this.view.galleryWrapper);

    this.createGallery();
    return this.view.wrapper;
  }

  createGallery = () => {

    const col = CreateDOMElement({
      tagName: 'div',
      classNames: ['col-md-4', 'cdx-block']
    });
    const Button = this.createButton('Add', {
      onclick: () => {
        this.view.galleryWrapper.insertBefore(this.createGalleryItem(), col);
      }
    });

    col.appendChild(Button);
    this.view.galleryWrapper.appendChild(col);

    if (this._data && this._data.images && Array.isArray(this._data.images)) {
      this._data.images.forEach((image) => {
        this.view.galleryWrapper.insertBefore(this.createGalleryItem(image), col);
      })
    }

  };

  createGalleryItem = (data = {}) => {
    const col = CreateDOMElement({
      tagName: 'div',
      classNames: ['col-md-4']
    });
    const image = new ImageTool({
      api: this.api,
      data: data,
      config: {
        ...this.config,
        endpoints: {
          byFile: '/api/gallery/',
          byUrl: '/api/gallery/',
        }
      }
    });

    this.view.images.push(image);
    const index = this.view.images.length - 1;
    const Button = this.createButton('Remove', {
      onclick: () => {
        col.remove();
        this.view.images.splice(index, 1);
      }
    }, ['cdx-button--image-remove']);

    col.appendChild(image.ui.nodes.wrapper);
    col.appendChild(Button);
    try {
      image.ui.customRender({file: {}});
    } catch (e) {
      console.log(e);
    }

    return col;
  };

  createButton = (content, events, classNames = []) => {
    const Button = CreateDOMElement({
      tagName: 'button',
      content: content,
      classNames: ['cdx-button', ...classNames],
      attributes: [
        {
          key: 'type',
          value: 'button',
        },
      ],
      events: events
    });
    return Button;
  }

  render() {
    return this.createLayout();
  }

  save() {
    const images = [];
    console.log(this.view.images);
    this.view.images.forEach(image => {
      images.push(image.publicSave());
    });

    return {
      header: this.view.header._element.innerHTML,
      text: this.view.text._element.innerHTML,
      images: images,
    }
  }

}
