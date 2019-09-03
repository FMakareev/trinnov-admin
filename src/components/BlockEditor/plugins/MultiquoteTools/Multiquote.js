import {IconQuote} from "./iconQuote";
import './style.css'

export class MultiquoteTools {


  /**
   * @param {object} view
   * @param {object} view.wrapper - plugin wrapper
   * @param {object} view.quoteListWrapper - container with blockquote
   * @param {object} view.quoteAddButton - DOM element btn added
   * @param {{blockquote: Object},{text: Object},{caption: Object}}[] view.quoteList
   * */
  view = {
    wrapper: null,
    quoteListWrapper: null,
    quoteList: [],
    quoteAddButton: null,
  };

  initData = [{
    text: '',
    caption: '',
  }];

  static get toolbox() {
    return {
      title: 'Multiquote Tools',
      icon: IconQuote
    };
  }


  constructor({data}) {
    if (data && Array.isArray(data)) {
      this.initData = data;
    }
  }


  /**
   * @desc создать дом элемент
   * */
  createElement = ({
                     tagName,
                     classNames = [],
                     attributes = [],
                     content = '',
                     events,
                   }) => {
    let element = document.createElement(tagName);
    element = this.addClassNames(element, classNames);
    element = this.addAttributes(element, attributes);
    element.innerHTML = content;

    events && Object.entries(events).forEach(([key, value]) => {
      element[key] = value;
    });

    return element;
  };


  /**
   * @returns {Object} - возвращает DOM элемент
   * @desc добавить классы на дом элемент
   * */
  addClassNames = (element, classNames) => {
    classNames && Array.isArray(classNames) && classNames.forEach(cssCass => {
      element.classList.add(cssCass);
    });
    return element;
  };

  /**
   * @returns {Object} - возвращает DOM элемент
   * @desc добавить атрибуты на дом элемент
   * */
  addAttributes = (element, attributes) => {
    attributes && Array.isArray(attributes) && attributes.forEach(attr => {
      element.setAttribute(attr.key, attr.value);
    });
    return element;
  };

  /**
   * @param {object} props
   * @param {string} props.text
   * @param {string} props.caption
   * @returns {{blockquote: Object},{text: Object},{caption: Object}}
   * @desc создание цитаты
   * */
  createQuote = ({text = '', caption = ''}) => {
    const quoteListLength = this.view.quoteList.length;
    let blockquote = this.createElement({
      tagName: 'blockquote',
      classNames: ['cdx-block', 'cdx-quote'],
      attributes: [
        {
          key: 'data-key',
          value: quoteListLength,
        },
      ]
    });

    let inputText = this.createElement({
      tagName: 'div',
      content: text,
      classNames: ['cdx-input', 'cdx-quote__text'],
      attributes: [
        {
          key: 'contenteditable',
          value: true,
        },
        {
          key: 'data-placeholder',
          value: "Enter a quote",
        },
      ]
    });

    let inputCaption = this.createElement({
      tagName: 'div',
      content: caption,
      classNames: ['cdx-input', 'cdx-quote__caption'],
      attributes: [
        {
          key: 'contenteditable',
          value: true,
        },
        {
          key: 'data-placeholder',
          value: "Enter a caption",
        },
      ]
    });

    let buttonRemove = this.createButton({
      content: 'Remove',
      events: {
        onclick: () => {
          this.removeQuote(blockquote)
        },
      }
    });


    blockquote.appendChild(inputText);
    blockquote.appendChild(inputCaption);
    blockquote.appendChild(buttonRemove);
    return {
      blockquote,
      text: inputText,
      caption: inputCaption,
    };
  };

  /**
   * @param {Object} props -
   * @param {String} props.content - innerHTML
   * @param {Object} props.events - dom events
   * @param {Array} props.attributes - dom attrs
   * @param {Array} props.classNames - css class
   * @returns {Object}
   * @desc
   * */
  createButton = ({events, attributes = [], classNames = [], content}) => {
    return this.createElement({
      tagName: 'button',
      classNames: ['cdx-button', ...classNames],
      content: content,
      attributes: [
        {
          key: 'type',
          value: 'button',
        },
        ...attributes,
      ],
      events: events
    });
  };

  /**
   * @desc create and added new blockquote
   * */
  addQuote = (props = {}) => {
    const quote = this.createQuote(props);
    this.view.quoteListWrapper.appendChild(quote.blockquote);
    this.view.quoteList.push(quote);
    this.recalculationOfQuoteIndex();
  };

  /**
   * @desc {object} blockquote - DOM element blockquote
   * @desc remove blockquote
   * */
  removeQuote = (blockquote) => {
    const index = blockquote.getAttribute('data-key');

    blockquote.remove();
    if (index > -1) {
      this.view.quoteList.splice(index, 1);
    }

    this.recalculationOfQuoteIndex();
  };

  /**
   * @desc recalculate indexes on attr data-key
   * */
  recalculationOfQuoteIndex = () => {
    this.view.quoteList.forEach((quote, index) => {
      quote.blockquote.setAttribute('data-key', index);
    })
  };


  render() {
    this.view.wrapper = this.createElement({
      tagName: 'div',
      classNames: ['multiquote_wrapper']
    });
    this.view.quoteListWrapper = this.createElement({
      tagName: 'div',
      classNames: ['multiquote_quoute-list-wrapper']
    });

    this.view.quoteAddButton = this.createButton({
      content: 'Added',
      events: {
        onclick: () => {
          this.addQuote()
        },
      }
    });
    this.initData.forEach((quote) => {
      this.addQuote(quote);
    });

    this.view.wrapper.appendChild(this.view.quoteListWrapper);
    this.view.wrapper.appendChild(this.view.quoteAddButton);

    return this.view.wrapper;
  }

  /**
   * @returns {{text: string, caption: string}[]}
   * @desc save plugin data
   * */
  save = () => {

    const data = [];
    this.view.quoteList.forEach((quote) => {
      const text = quote.text && quote.text.innerHTML;
      const caption = quote.caption && quote.caption.innerHTML;
      if (!text && !caption) {
        return null;
      }
      data.push({
        text: quote.text && quote.text.innerHTML,
        caption: quote.caption && quote.caption.innerHTML,
      })
    });
    return data;
  }

}


