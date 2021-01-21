import { randomInteger } from './utils';
import Person from './person';
import Playground from './playground';

export default class Game {
  constructor() {
    this.person = null;
    this.personPositionIndex = '';
    this.playground = null;
    this.score = 0;
    this.scoreFail = 0;
    this.funcGame = null;
  }

  createGame() {
    this.playground = new Playground();
    this.person = new Person('Гном');
  }

  startGame() {
    this.personPositionIndex = +randomInteger(1, 12);
    this.playground.cells[this.personPositionIndex].appendChild(this.person.htmlView);
    this.funcGame = this.gameStep.bind(this);
    setInterval(this.funcGame, 1000);
    this.playground.place.addEventListener('click', (e) => {
      this.gameAction(e);
    });
  }

  gameStep() {
    if (this.scoreFail === 5) {
      this.gameOver();
    }
    this.movePerson();
    this.scoreFail += 1;
    console.log(`Попаданий: ${this.score}, Появлений без попаданий: ${this.scoreFail}`);
  }

  gameAction(e) {
    if (+e.target.dataset.cellid === this.personPositionIndex) {
      if (this.score === 5) {
        this.gameWin();
      }
      this.score += 1;
      this.movePerson();
      this.scoreFail = 0;
    }
  }

  movePerson() {
    let newPositionIndex = randomInteger(1, 12);
    if (newPositionIndex === this.personPositionIndex) newPositionIndex = randomInteger(1, 12);
    this.playground.cells[this.personPositionIndex].removeChild(this.person.htmlView);
    this.playground.cells[newPositionIndex].appendChild(this.person.htmlView);
    this.personPositionIndex = +newPositionIndex;
  }

  gameOver() {
    alert('Проиграли');
    this.gameClear();
  }

  gameWin() {
    alert('Победили');
    this.gameClear();
  }

  gameClear() {
    this.score = 0;
    this.scoreFail = 0;
  }
}
