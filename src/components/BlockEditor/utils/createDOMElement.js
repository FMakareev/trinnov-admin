/**
 * @param {Object} props
 * @param {String} props.tagName
 * @param {Array} props.classNames
 * @param {Array} props.attributes
 * @param {String} props.content
 * @param {Object} props.events
 * @return {Element}
 * */
export const CreateDOMElement = ({
                                   tagName,
                                   classNames = [],
                                   attributes = [],
                                   content = '',
                                   events,
                                 }) => {
  let element = document.createElement(tagName);
  element = addClassNames(element, classNames);
  element = addAttributes(element, attributes);
  element.innerHTML = content;

  events && Object.entries(events).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
};

/**
 * @param {Element} element
 * @param {Array} classNames
 * @return {Element}
 * @desc добавить классы на дом элемент
 * */
const addClassNames = (element, classNames) => {
  classNames && Array.isArray(classNames) && classNames.forEach(cssCass => {
    element.classList.add(cssCass);
  });
  return element;
};

/**
 * @param {Element} element
 * @param {Array} attributes
 * @return {Element}
 * @desc добавить атрибуты на дом элемент
 * */
const addAttributes = (element, attributes) => {
  attributes && Array.isArray(attributes) && attributes.forEach(attr => {
    element.setAttribute(attr.key, attr.value);
  });
  return element;
};
