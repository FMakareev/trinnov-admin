import React from 'react';
import ReactEditorJs from 'react-editor-js';
import classNames from "classnames";
import './BlockEditorStyle.css';
import listTool from '@editorjs/list'
import Paragraph from "./plugins/paragraph";
import {MultiquoteTools} from "./plugins/MultiquoteTools/Multiquote";
import ImageTool from "./plugins/imageTool";
import EmbedVideoTool from "./plugins/embed";
import {ParagraphWithImage} from "./plugins/paragraphWithImage";
import {TabsEmbed} from "./plugins/TabsEmbed";
import GridTextBlock from "./plugins/gridTextBlock";
import {TextWithTitle} from "./plugins/textWithTitle";
import {TitleWithLogoWithText} from "./plugins/titleWithLogoWithText";
import {TitleWithTextWithLogo} from "./plugins/titleWithTextWithLogo";
import {TitleWithTextWithGallery} from "./plugins/titleWithTextWithGallery";
import {ListToolWithText} from "./plugins/listToolWithText";

const initData = (value) => {
  if (typeof value === 'string' && value.length > 0) {
    return {
      blocks: [
        {
          type: "paragraph",
          data: {
            text: value,
          }
        }
      ]
    }
  } else if (value && value.blocks) {
    return value;
  } else {
    return {}
  }
};

const tools = {
  list: {
    class:listTool,
    inlineToolbar: true,
  },
  titleWithText: {
    class: TextWithTitle,
    inlineToolbar: true,
  },
  titleWithLogoWithText: {
    class: TitleWithLogoWithText,
    inlineToolbar: true,
  },
  titleWithTextWithLogo: {
    class: TitleWithTextWithLogo,
    inlineToolbar: true,
  },
  titleWithList: {
    class: ListToolWithText,
    inlineToolbar: true,
  },
  TitleWithTextWithGallery: {
    class: TitleWithTextWithGallery,
    inlineToolbar: true,
  },
  gridTextBlock: {
    class: GridTextBlock,
    inlineToolbar: true,
    config: {
      col: 2,
    }
  },
  tabsEmbed: {
    class: TabsEmbed,
    inlineToolbar: true,
    config: {
      col: 2,
      services: {
        youtube: true,
        coub: true,
      },
    }
  },
  paragraphWithImage: {
    class: ParagraphWithImage,
    inlineToolbar: true,
    config: {
      imageCaption: false,
      endpoints: {
        byFile: '/editor/transport',
        byUrl: '/editor/transport',
      }
    }
  },
  multiquote: {
    class: MultiquoteTools,
    inlineToolbar: true,
  },
  paragraph:{
    class: Paragraph,
    inlineToolbar: true,
  },
  introText: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: 'Enter text',
      css: {
        wrapper: ['intro_text']
      },
    },
  },
  embed: {
    class: EmbedVideoTool,
    inlineToolbar: true,
    config: {
      services: {
        youtube: true,
        coub: true,
      }
    }
  },
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: '/api/gallery/',
        byUrl: '/api/gallery/',
      }
    }
  }
};


const BlockEditor = ({input, meta: {touched, error, submitError}, EditorRefInstance}) => {

  return (
    <div
      className={"form-control"}
      style={{
        position: 'relative',
        padding: '.4375rem .75rem .4375rem 1.5rem'
      }}>

      {/*<button type={'button'} onClick={async () => {*/}
      {/*  const data = await EditorRefInstance.EditorRefInstance.save();*/}
      {/*  console.log(JSON.stringify(data));*/}
      {/*}}>*/}
      {/*  save*/}
      {/*</button>*/}
      {/* this is for auto focus submitError */}
      <input
        {...input}
        style={{
          position: 'absolute',
          opacity: 0,
        }}
        type="text"
      />
      <div
        style={{display: 'none'}}
        className={classNames("form-control", {
          "is-invalid": true,
        })}
      >
      </div>
      {
        touched && (error || submitError) &&
        <div className="invalid-feedback mb-3">
          {error || submitError}
        </div>
      }
      <ReactEditorJs
        data={initData(input.value)}
        tools={tools}
        instanceRef={(instance) => {
          EditorRefInstance
          && EditorRefInstance.addEditorRefInstance
          && EditorRefInstance.addEditorRefInstance(instance);
        }}
      />
    </div>
  );
}

export default BlockEditor;
