import { createHtmlView } from './utils';

export default class Person {
  constructor(type) {
    this.type = type;
    this.htmlView = createHtmlView();
  }
}
