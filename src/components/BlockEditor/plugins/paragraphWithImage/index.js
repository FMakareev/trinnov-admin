import Paragraph from "../paragraph";
import ImageTool from "../imageTool";
import {textWithImageIcon} from "./textWithImageIcon";


/**
 * @typedef {Object} ParagraphWithImageData
 * @description Tool's input and output data format
 * @property {String} text — Paragraph's content. Can include HTML tags: <a><b><i>
 * @property {string} caption — image caption
 * @property {boolean} withBorder - should image be rendered with border
 * @property {boolean} withBackground - should image be rendered with background
 * @property {boolean} stretched - should image be stretched to full width of container
 * @property {object} file — Image file data returned from backend
 * @property {string} file.url — image URL
 */


export class ParagraphWithImage {

  static get toolbox() {
    return {
      title: 'Paragraph with image',
      icon: textWithImageIcon
    };
  }

  Paragraph = null;
  Image = null;

  constructor(props) {
    this.Paragraph = new Paragraph(props);

    this.Image = new ImageTool({
      ...props,
      config: {
        ...props.config,
        endpoints: {
          byFile: '/editor/transport',
          byUrl: '/editor/transport',
        }
      }
    });

  }


  createLayout = () => {
    const Wrapper = document.createElement("div");
    Wrapper.classList.add("row");
    const ColLeft = document.createElement("div");
    ColLeft.classList.add("col-md-6");
    ColLeft.classList.add("ce-block__content");
    ColLeft.appendChild(this.Paragraph._element);

    const ColRight = document.createElement("div");
    ColRight.classList.add("col-md-6");
    ColRight.appendChild(this.Image.ui.nodes.wrapper);

    Wrapper.appendChild(ColLeft);
    Wrapper.appendChild(ColRight);


    try {
      this.Image.ui.customRender({file: {}})
    } catch (e) {
      console.log(e);
    }

    return Wrapper;
  }


  render() {


    return this.createLayout();
  }

  /**
   * @returns {ParagraphWithImageData}
   * @desc save plugin data
   * */
  save = () => {
    return {
      ...this.Paragraph.publicSave(this.Paragraph._element),
      ...this.Image.publicSave(),
    }
  }

}

export default ParagraphWithImage
