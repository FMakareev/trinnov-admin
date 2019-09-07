import {isElement} from "./isElement";


export class SelectionUtils {

  /**
   * Editor styles
   * @return {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: 'codex-editor',
      editorZone: 'codex-editor__redactor',
    };
  }

  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   * @return {Node|null}
   */
  static get anchorNode() {
    const selection = window.getSelection();

    return selection ? selection.anchorNode : null;
  }

  /**
   * Returns selected anchor element
   * @return {Element|null}
   */
  static get anchorElement() {
    const selection = window.getSelection();

    if (!selection) {
      return null;
    }

    const anchorNode = selection.anchorNode;

    if (!anchorNode) {
      return null;
    }

    if (!isElement(anchorNode)) {
      return anchorNode.parentElement;
    } else {
      return anchorNode;
    }
  }

  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   * @return {Number|null}
   */
  static get anchorOffset() {
    const selection = window.getSelection();

    return selection ? selection.anchorOffset : null;
  }

  /**
   * Is current selection range collapsed
   * @return {boolean|null}
   */
  static get isCollapsed() {
    const selection = window.getSelection();

    return selection ? selection.isCollapsed : null;
  }

  /**
   * Returns true if 85% of text content is selected
   * @return {boolean}
   */
  static almostAllSelected(targetText) {
    const range = SelectionUtils.range;

    if (!range) {
      return false;
    }

    const copiedFragment = range.cloneContents();
    const lengthOfWholeText = targetText.length;
    const lengthOfCopiedText = copiedFragment.textContent.length;

    return lengthOfCopiedText / lengthOfWholeText > 0.85;
  }

  /**
   * Check current selection if it is at Editor's zone
   * @return {boolean}
   */
  static get isAtEditor() {
    const selection = SelectionUtils.get();

    /**
     * Something selected on document
     */
    let selectedNode = (selection.anchorNode || selection.focusNode);

    if (selectedNode && selectedNode.nodeType === Node.TEXT_NODE) {
      selectedNode = selectedNode.parentNode ;
    }

    let editorZone = null;
    if (selectedNode) {
      editorZone = selectedNode.closest(`.${SelectionUtils.CSS.editorZone}`);
    }

    /**
     * SelectionUtils is not out of Editor because Editor's wrapper was found
     */
    return editorZone && editorZone.nodeType === Node.ELEMENT_NODE;
  }

  /**
   * Return first range
   * @return {Range|null}
   */
  static get range() {
    const selection = window.getSelection();

    return selection && selection.rangeCount ? selection.getRangeAt(0) : null;
  }

  /**
   * Calculates position and size of selected text
   * @return {{x, y, width, height, top?, left?, bottom?, right?}}
   */
  static get rect() {
    let sel = (document).selection,
      range;

    let rect = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    } ;

    if (sel && sel.type !== 'Control') {
      sel = sel;
      range = sel.createRange();
      rect.x = range.boundingLeft;
      rect.y = range.boundingTop;
      rect.width = range.boundingWidth;
      rect.height = range.boundingHeight;

      return rect;
    }

    if (!window.getSelection) {
      console.log('Method window.getSelection is not supported', 'warn');
      return rect;
    }

    sel = window.getSelection();

    if (sel.rangeCount === null || isNaN(sel.rangeCount)) {
      console.log('Method SelectionUtils.rangeCount is not supported', 'warn');
      return rect;
    }

    range = sel.getRangeAt(0).cloneRange();

    if (range.getBoundingClientRect) {
      rect = range.getBoundingClientRect();
    }
    // Fall back to inserting a temporary element
    if (rect.x === 0 && rect.y === 0) {
      const span = document.createElement('span');

      if (span.getBoundingClientRect) {
        // Ensure span has dimensions and position by
        // adding a zero-width space character
        span.appendChild(document.createTextNode('\u200b'));
        range.insertNode(span);
        rect = span.getBoundingClientRect();

        const spanParent = span.parentNode;

        spanParent.removeChild(span);

        // Glue any broken text nodes back together
        spanParent.normalize();
      }
    }

    return rect;
  }

  /**
   * Returns selected text as String
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : '';
  }

  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   * @return {Selection}
   */
  static get() {
    return window.getSelection();
  }

  instance = null;
  selection = null;

  /**
   * This property can store SelectionUtils's range for restoring later
   * @type {Range|null}
   */
  savedSelectionRange = null;

  /**
   * Fake background is active
   *
   * @return {boolean}
   */
  isFakeBackgroundEnabled = false;

  /**
   * Native Document's commands for fake background
   */
    commandBackground = 'backColor';
    commandRemoveFormat = 'removeFormat';

  /**
   * Removes fake background
   */
   removeFakeBackground() {
    if (!this.isFakeBackgroundEnabled) {
      return;
    }

    this.isFakeBackgroundEnabled = false;
    document.execCommand(this.commandRemoveFormat);
  }

  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, false, '#a8d6ff');

    this.isFakeBackgroundEnabled = true;
  }

  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = SelectionUtils.range;
  }

  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange) {
      return;
    }

    const sel = window.getSelection();

    sel.removeAllRanges();
    sel.addRange(this.savedSelectionRange);
  }

  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }

  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const sel = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(sel.focusNode);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {String} tagName       - tag to found
   * @param  {String} [className]   - tag's class name
   * @param  {Number} [searchDepth] - count of tags that can be included. For better performance.
   * @return {HTMLElement|null}
   */
  findParentTag(tagName, className, searchDepth = 10) {
  const selection = window.getSelection();
  let parentTag = null;

  /**
   * If selection is missing or no anchorNode or focusNode were found then return null
   */
  if (!selection || !selection.anchorNode || !selection.focusNode) {
  return null;
}

/**
 * Define Nodes for start and end of selection
 */
const boundNodes = [
  /** the Node in which the selection begins */
  selection.anchorNode,
  /** the Node in which the selection ends */
  selection.focusNode,
];

/**
 * For each selection parent Nodes we try to find target tag [with target class name]
 * It would be saved in parentTag variable
 */
boundNodes.forEach((parent) => {
  /** Reset tags limit */
  let searchDepthIterable = searchDepth;

  while (searchDepthIterable > 0 && parent.parentNode) {
    /**
     * Check tag's name
     */
    if (parent.tagName === tagName) {
      /**
       * Save the result
       */
      parentTag = parent;

      /**
       * Optional additional check for class-name mismatching
       */
      if (className && parent.classList && !parent.classList.contains(className)) {
        parentTag = null;
      }

      /**
       * If we have found required tag with class then go out from the cycle
       */
      if (parentTag) {
        break;
      }
    }

    /**
     * Target tag was not found. Go up to the parent and check it
     */
    parent = parent.parentNode;
    searchDepthIterable--;
  }
});

/**
 * Return found tag or null
 */
return parentTag;
}

/**
 * Expands selection range to the passed parent node
 *
 * @param {HTMLElement} element
 */
 expandToTag(element) {
  const selection = window.getSelection();

selection.removeAllRanges();
const range = document.createRange();

range.selectNodeContents(element);
selection.addRange(range);
}
}
