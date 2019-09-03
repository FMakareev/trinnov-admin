import {CreateDOMElement} from "../../utils/createDOMElement";
import SERVICES from "../embed/services";
import {IconTabsEmbed} from "./icon";

/**
 * @typedef {Object} EmbedData
 * @description Embed Tool data
 * @property {string} service - service name
 * @property {string} url - source URL of embedded content
 * @property {string} embed - URL to source embed page
 * @property {number} [width] - embedded content width
 * @property {number} [height] - embedded content height
 * @property {string} [caption] - content caption
 */
export class TabsEmbed {

  static get toolbox() {
    return {
      title: 'Two embed',
      icon: IconTabsEmbed
    };
  }

  api = null;

  view = {
    wrapper: null,
    cols: [],
  };

  config = {
    col: 2,
  };

  /** */
  _data = [];

  /**
   * @param {number} [data.index]
   * @param {RegExp} [data.regex] - pattern of source URLs
   * @param {string} [data.embedUrl] - URL scheme to embedded page. Use '<%= remote_id %>' to define a place to insert resource id
   * @param {string} [data.html] - iframe which contains embedded content
   * @param {number} [data.height] - iframe height
   * @param {number} [data.width] - iframe width
   * @param {string} [data.caption] - caption
   *
   * */
  set data(data) {
    this._data[data.index] = data;
    const oldView = this.view.cols[data.index];
    if (oldView.childNodes.length) {
      oldView.replaceChild(this.createEmbedView(data), oldView.childNodes[0]);
    }
  }

  get data() {
    return this._data;
  }

  /**
   * Get plugin styles
   * @return {Object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      container: 'embed-tool',
      containerLoading: 'embed-tool--loading',
      preloader: 'embed-tool__preloader',
      caption: 'embed-tool__caption',
      url: 'embed-tool__url',
      content: 'embed-tool__content'
    };
  }

  constructor(props) {
    console.log(props);
    const {config, api, data} = props;
    this._data = data;
    this.api = api;
    this.config = {
      ...this.config,
      ...config,
    };
  }

  /**
   * @param {number} col
   * @returns {Element}
   * @desc
   * */
  getColClassByColCount = (col) => {
    switch (col) {
      case (2): {
        return 'col-md-6';
      }
      case (3): {
        return 'col-md-4';
      }
      case (4): {
        return 'col-md-3';
      }
      default: {
        return 'col-md-6';
      }
    }
  }

  createTextField = (index) => {
    const input = CreateDOMElement({
      tagName: 'div',
      classNames: ['form-control', 'ce-paragraph', 'cdx-block'],
      attributes: [
        {
          key: 'contentEditable',
          value: true
        },
        {
          key: 'data-placeholder',
          value: 'Enter video link'
        },
      ]
    });

    input.addEventListener('paste', (event) => {
      event.preventDefault();
      event.stopPropagation();
      let paste = (event.clipboardData || window.clipboardData).getData('text');
      this.checkServiceInText(paste, index)
    });
    return input;
  };

  createColumn = (index) => {
    const baseCol = CreateDOMElement({
      tagName: 'div',
      classNames: [this.getColClassByColCount(this.config.col)],
      attributes: [
        {
          key: 'data-embed-tabs-col-key',
          value: index
        },
      ]
    });

    if(this.data[index]){
      baseCol.appendChild(this.createEmbedView(this.data[index]));
    } else {
      baseCol.appendChild(this.createTextField(index));
    }


    return baseCol;
  };

  /**
   * @param {string} text
   * @param {number} index
   * @desc
   * */
  checkServiceInText = (text, index) => {
    try {
      if (this.config.services == null) {
        return;
      }
      for (let service in this.config.services) {
        if (this.config.services.hasOwnProperty(service) && this.config.services[service]) {
          const {regex, embedUrl, width, height, id = (ids) => ids.shift()} = SERVICES[service];

          const [url] = text.match(new RegExp(regex, 'gi'));
          if (url) {
            const result = regex.exec(url).slice(1);
            const embed = embedUrl.replace(/<\%\= remote\_id \%\>/g, id(result));

            this.data = {
              index,
              service,
              source: url,
              embed,
              width,
              height
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * @returns {Element}
   * @desc
   * */
  createView = () => {
    this.view.wrapper = CreateDOMElement({
      tagName: 'div',
      classNames: ['row']
    });

    for (let i = 0; i < this.config.col; i += 1) {
      this.view.cols.push(this.createColumn(i));
      this.view.wrapper.appendChild(this.view.cols[i]);
    }
    return this.view.wrapper;
  };

  /**
   * Creates preloader to append to container while data is loading
   * @return {HTMLElement} preloader
   */
  createPreloader() {
    const preloader = document.createElement('preloader');
    const url = document.createElement('div');

    url.textContent = this.data.source;

    preloader.classList.add(this.CSS.preloader);
    url.classList.add(this.CSS.url);

    preloader.appendChild(url);

    return preloader;
  }

  createEmbedView = (data) => {
    const {html} = SERVICES[data.service];
    const button = CreateDOMElement({
      tagName: 'button',
      classNames: ['cdx-button'],
      content: 'Reset',
      attributes: [
        {
          key: 'type',
          value: 'button',
        },
      ],
      events: {
        onclick: () => {
          // this.createTextField(index)
          const oldView = this.view.cols[data.index];
          if (oldView.childNodes.length) {
            oldView.replaceChild(this.createTextField(data.index), oldView.childNodes[0]);
          }
        }
      }
    });
    const container = document.createElement('div');
    const template = document.createElement('template');
    const preloader = this.createPreloader();

    container.classList.add(this.CSS.baseClass, this.CSS.container, this.CSS.containerLoading);

    template.innerHTML = html;
    template.content.firstChild.setAttribute('src', data.embed);
    template.content.firstChild.classList.add(this.CSS.content);

    container.appendChild(preloader);
    container.appendChild(template.content.firstChild);
    container.appendChild(button);


    void this.embedIsReady(container);

    return container;
  }

  render() {
    return this.createView();
  }

  /**
   * Checks that mutations in DOM have finished after appending iframe content
   * @param {HTMLElement} targetNode - HTML-element mutations of which to listen
   * @return {Promise<any>} - result that all mutations have finished
   */
  embedIsReady(targetNode) {
    const PRELOADER_DELAY = 500;
    void new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve();
        targetNode.classList.remove(this.CSS.containerLoading);
      },PRELOADER_DELAY)
    })
  }

  save(){
    console.log(this.data);
    return this.data;
  }


}
