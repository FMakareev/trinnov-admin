import {CreateDOMElement} from "../../utils/createDOMElement";
import IconGrid from "./iconGrid";
import {IconGridTwo} from "./iconGrid2";
import {IconGridThree} from "./iconGrid3";
import {IconGridFour} from "./iconGrid4";
import Paragraph from "../paragraph";
import Header from '@editorjs/header';


export class GridTextBlock {

  renderSettingsWrapper = null;
  settingsToolbar = [
    {
      name: 'Grid 2',
      icon: IconGridTwo
    },
    {
      name: 'Grid 3',
      icon: IconGridThree,
    },
    {
      name: 'Grid 4',
      icon: IconGridFour,
    },
  ];

  api = null;
  _data = null;

  config = {
    col: 2,
  };

  view = {
    wrapper: null,
    cols: []
  };

  static get toolbox() {
    return {
      title: 'Grid Text Block',
      icon: IconGrid,
    };
  }

  constructor({data, api, config}) {
    console.log(data);
    this._data = data;
    this.api = api;
    this.config = {
      ...config,
      col: Array.isArray(data) && data.length >= 2 ? data.length : 2
    };

  }


  _toggleTune(tune) {
    switch (tune) {
      case ('Grid 2'): {
        this.changeGrid(2);
        break;
      }
      case ('Grid 3'): {
        this.changeGrid(3);
        break;
      }
      case ('Grid 4'): {
        this.changeGrid(4);
        break;
      }
    }
  }

  renderSettings() {
    const wrapper = CreateDOMElement({
      tagName: 'div'
    });

    this.settingsToolbar.forEach(tune => {
      let button = CreateDOMElement({
        tagName: 'button',
        classNames: ['cdx-settings-button'],
        content: tune.icon,
        attributes: [
          {
            key: 'type',
            value: 'button'
          }
        ],
        events: {
          onclick: () => {
            this._toggleTune(tune.name);
            for (let elem of wrapper.children) {
              console.log(elem);
              elem.classList.remove('cdx-settings-button--active');
            }
            button.classList.toggle('cdx-settings-button--active');
          }
        }
      });

      // button.innerHTML = tune.icon;
      wrapper.appendChild(button);
    });
    this.renderSettingsWrapper = wrapper;
    return wrapper;
  }

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
  };

  changeGrid = (columnCount) => {
    if (columnCount === this.config.col) {
      return;
    } else if (columnCount > this.config.col) {
      for (let i = 0; i < columnCount; i += 1) {
        if (this.view.cols[i] === undefined) {
          this.view.cols.push(this.createColumn(i, columnCount));
          this.view.wrapper.appendChild(this.view.cols[i].col);
        } else {
          this.view.cols[i]
            .col
            .classList
            .remove(this.getColClassByColCount(this.config.col));
          this.view.cols[i]
            .col
            .classList
            .add(this.getColClassByColCount(columnCount))
        }
      }
    } else if (columnCount < this.config.col) {
      const removeList = this.view.cols.splice(columnCount, this.config.col - columnCount);
      removeList.forEach(elem => {
        console.log(elem);
        elem.col.remove();
      });
      for (let i = 0; i < columnCount; i += 1) {
        this.view.cols[i]
          .col
          .classList
          .remove(this.getColClassByColCount(this.config.col));
        this.view.cols[i]
          .col
          .classList
          .add(this.getColClassByColCount(columnCount));
      }
    }
    this.config.col = columnCount;
  };

  createColumn = (index, colSize) => {
    const baseCol = CreateDOMElement({
      tagName: 'div',
      classNames: [this.getColClassByColCount(colSize)],
      attributes: [
        {
          key: 'data-col-key',
          value: index
        },
      ]
    });

    let headerContent = '';
    let textContent = '';
    if (this._data[index]) {
      headerContent = this._data[index].header;
      textContent = this._data[index].text;
    }

    const header = new Header({
      data: {
        text: headerContent,
        level: 4,
      },
      api: this.api,
      config: {
        placeholder: 'Enter header',
        level: 4
      }
    });

    const text = new Paragraph({
      data: {
        text: textContent,
      },
      api: this.api,
      config: {
        placeholder: 'Enter text'
      }
    });

    baseCol.appendChild(header._element);
    baseCol.appendChild(text._element);

    return {
      col: baseCol,
      header,
      text
    };
  };

  renderLayout() {
    this.view.wrapper = CreateDOMElement({
      tagName: 'div',
      classNames: ['row']
    });

    for (let i = 0; i < this.config.col; i += 1) {
      this.view.cols.push(this.createColumn(i, this.config.col));
      this.view.wrapper.appendChild(this.view.cols[i].col);
    }
    return this.view.wrapper;
  }

  render() {
    return this.renderLayout();
  }

  save() {
    const data = [];
    this.view.cols.forEach((elem) => {
      console.log(elem);
      data.push({
        header: elem.header._element.innerHTML,
        text: elem.text._element.innerHTML,
      })
    });
    console.log(data);
    return data;

  }


}

export default GridTextBlock;
