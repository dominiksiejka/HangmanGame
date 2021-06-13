import { Message } from "./Message.js";

export class Quote {
  constructor(text, faces) {
    this.text = text.toLowerCase();
    this.alreadyGuessed = [];
    this.smileFaces = faces;
    this.num = 0;
  }
  getTitle() {
    let singleChar = "";
    for (const char of this.text) {
      if (char.indexOf(" ") !== -1 || this.alreadyGuessed.includes(char)) {
        singleChar += char;
      } else {
        singleChar += "_";
      }
    }
    return singleChar;
  }

  guess(letter) {
    const steps = [...this.smileFaces.querySelectorAll(".step")];

    if (!this.text.includes(letter)) {
      steps[this.num].style.opacity = 1;
      this.num++;
    } else {
      this.alreadyGuessed.push(letter);
    }
    Message.failureMessage(this.num);
  }
}
