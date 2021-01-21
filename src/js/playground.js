export default class Playground {
  constructor() {
    this.cells = [];
    this.place = null;
    const gamePlace = document.getElementById('gamePlace');
    const playground = document.createElement('div');
    playground.setAttribute('class', 'playground');
    this.place = playground;
    gamePlace.appendChild(playground);
    for (let i = 0; i < 16; i += 1) {
      const gameCell = document.createElement('div');
      gameCell.setAttribute('data-cellId', i);
      gameCell.setAttribute('class', 'playground__cell');
      playground.appendChild(gameCell);
      this.cells.push(gameCell);
    }
  }
}
