import { quotes } from "./index.js";
export class Message {
  static allhideLetters() {
    const letterss = document.getElementById("letters");
    letterss.style.display = "none";
    const categoryTitle = document.getElementById("category");
    categoryTitle.style.display = "none";
  }
  static winMessage(win) {
    setTimeout(() => {
      quotes.forEach((itm) => {
        if (itm.text === win.textContent) {
          win.textContent = `Congratulations! You won the game!`;
          win.style.backgroundColor = "greenyellow";
          Message.allhideLetters();
        }
      }, 0);
    });
  }
  static failureMessage = (failure) => {
    const word = document.getElementById("word");

    if (failure === 8) {
      setTimeout(() => {
        word.textContent = "Game Over! Try again";
        word.style.backgroundColor = "red";
        Message.allhideLetters();
      }, 0);
    }
  };
}
