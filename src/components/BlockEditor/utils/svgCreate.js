export const svgCreate = (name, width = 14, height = 14) => {
  const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  icon.classList.add('icon', 'icon--' + name);
  icon.setAttribute('width', width + 'px');
  icon.setAttribute('height', height + 'px');
  icon.innerHTML = `<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#${name}"></use>`;

  return icon;
}
