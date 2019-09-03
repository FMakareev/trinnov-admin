import IconGrid from "../gridTextBlock/iconGrid";
import {CreateDOMElement} from "../../utils/createDOMElement";
import Header from "@editorjs/header";
import {List} from "../list";
import Shortcut from "@codexteam/shortcuts";


export class TitleWithList {
  _data = {};

  view = {
    wrapper: null,
    listWrapper: null,
    header: null,
  };

  api = null;
  config = null;

  static get toolbox() {
    return {
      title: 'Title with list',
      icon: IconGrid,
    };
  }


  constructor({api, data, config}) {
    this.api = api;
    this.data = data;
    this.config = config;

    this.List = new List({api,data,config})
  }


  set data(data) {

    if(!data){
      this._data = {
        items: [],
      }
    } else {
      this._data = {
        items: [],
        ...data,
      }
    }



  }
  get data() {
    console.log(this._data);
    return this._data;
  }

  /**
   * Styles
   * @private
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: 'cdx-list',
      wrapperOrdered: 'cdx-list--ordered',
      wrapperUnordered: 'cdx-list--unordered',
      item: 'cdx-list__item',
      settingsWrapper: 'cdx-list-settings',
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
    };
  };


  /**
   * Returns current List item by the caret position
   * @return {Element}
   */
  get currentItem() {
    let currentNode = window.getSelection().anchorNode;

    if (currentNode.nodeType !== Node.ELEMENT_NODE) {
      currentNode = currentNode.parentNode;
    }

    return currentNode.closest(`.${this.CSS.item}`);
  }


  createLayout() {
    this.view.wrapper = CreateDOMElement({
      tagName: 'div',
      attributes: [
        // {
        //   key: 'contentEditable',
        //   value: false,
        // }
      ]
    });

    let headerContent = '';
    if (this._data) {
      headerContent = this._data.header;
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
    console.log(this.List);
    this.List.publicRender()
    this.view.wrapper.appendChild(this.view.header._element);
    this.view.wrapper.appendChild(this.List._elements.wrapper);

    return this.view.wrapper;
  }

  // createList = () => {
  //   const UL = CreateDOMElement({
  //     tagName: 'ul',
  //     classNames: [this.CSS.baseBlock, this.CSS.wrapper],
  //
  //   });
  //
  //   if (this._data.items.length) {
  //     this._data.items.forEach(item => {
  //       UL.appendChild(CreateDOMElement({
  //         tagName: 'li',
  //         classNames: [this.CSS.item],
  //         content: item,
  //       }));
  //     });
  //   } else {
  //     UL.appendChild(CreateDOMElement({
  //       tagName: 'li',
  //       classNames: [this.CSS.item],
  //     }));
  //   }
  //
  //   // detect keydown on the last item to escape List
  //   UL.addEventListener('keydown', (event) => {
  //     event.stopPropagation();
  //     event.stopImmediatePropagation();
  //     const [ENTER, BACKSPACE] = [13, 8]; // key codes
  //     console.log(event.keyCode);
  //     switch (event.keyCode) {
  //       case ENTER:
  //         this.api.caret.setToBlock(this._elements.wrapper);
  //         this.getOutOfList(event);
  //         break;
  //       case BACKSPACE:
  //         this.backspace(event);
  //         break;
  //     }
  //   }, false);
  //
  //   this.view.listWrapper = UL;
  //
  //   return UL;
  // }


  render() {
    return this.createLayout();
  }

  /**
   * Get out from List Tool
   * by Enter on the empty last item
   * @param {KeyboardEvent} event
   */
  getOutOfList(event) {
    const items = this.view.listWrapper.querySelectorAll('.' + this.CSS.item);

    /**
     * Save the last one.
     */
    if (items.length < 2) {
      return;
    }

    const lastItem = items[items.length - 1];
    const currentItem = this.currentItem;

    /** Prevent Default li generation if item is empty */
    if (currentItem === lastItem && !lastItem.textContent.trim().length) {
      /** Insert New Block and set caret */
      currentItem.parentElement.removeChild(currentItem);
      this.api.blocks.insertNewBlock();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * Handle backspace
   * @param {KeyboardEvent} event
   */
  backspace(event) {
    const items = this.view.listWrapper.querySelectorAll('.' + this.CSS.item),
      firstItem = items[0];

    if (!firstItem) {
      return;
    }

    /**
     * Save the last one.
     */
    if (items.length < 2 && !firstItem.innerHTML.replace('<br>', ' ').trim()) {
      event.preventDefault();
    }
  }


  save() {
    return {
      header: this.view.header._element.innerHTML,
    }
  }

}
