import goblin from '../img/js.png';

export function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export function createHtmlView() {
  const htmlView = document.createElement('img');
  htmlView.setAttribute('src', goblin);
  htmlView.setAttribute('class', 'person');
  return htmlView;
}
