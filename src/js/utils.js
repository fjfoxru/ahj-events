export function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function createHtmlView() {
  const htmlView = document.createElement('img');
  htmlView.setAttribute('src', 'src/img/js.png');
  htmlView.setAttribute('class', 'person');
  return htmlView;
}
