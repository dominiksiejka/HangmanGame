import { Quote } from "./Quote.js";
import { Message } from "./Message.js";

const fixTheHeight = () => {
  document.documentElement.style.setProperty(
    "--fixedHeight",
    `${window.innerHeight}px`
  );
};
fixTheHeight();

export const quotes = [
  {
    text: "javascript",
    category: "The most popular programming language nowadayas",
  },
  {
    text: "zakynthos",
    category: "name of one of the Greek islands",
  },
  {
    text: "spiderman",
    category: "movie with hero of spiders",
  },
  {
    text: "coldplay",
    category: "music band",
  },
  {
    text: "concatenation",
    category: "String joinning in javascript is called...",
  },
  {
    text: "tokyo",
    category: "Capital of Japan",
  },
  {
    text: "gniezno",
    category: "First capital of Poland",
  },
  {
    text: "johny deep",
    category: "Hollywood actor",
  },
  {
    text: "youtube",
    category: "popular video streaming service",
  },
  {
    text: "rowling",
    category: "author of Harry Potter",
  },
];
class Game {
  constructor({ faces, word, category, letters }) {
    this.faces = faces;
    this.word = word;
    this.category = category;
    this.letters = letters;
    const { text, category: categ } =
      quotes[Math.floor(Math.random() * quotes.length)];
    this.category.textContent = categ;
    this.quote = new Quote(text, this.faces);
    this.start();
  }

  handleLetters = (e) => {
    this.quote.guess(e.target.textContent);
    this.refershMainText();
    e.target.setAttribute("disabled", true);
  };

  drawLetters() {
    for (let i = 10; i < 36; i++) {
      const letter = i.toString(36);
      const btn = document.createElement("button");
      btn.textContent = letter;
      this.letters.appendChild(btn);
    }
    this.letters.addEventListener("click", this.handleLetters);
  }
  refershMainText() {
    const wordContent = this.quote.getTitle();
    this.word.textContent = wordContent;
    Message.winMessage(this.word);
  }
  start() {
    this.drawLetters();
    this.refershMainText();
  }
}

const game = new Game({
  faces: document.getElementById("output"),
  word: document.getElementById("word"),
  category: document.getElementById("category"),
  letters: document.getElementById("letters"),
});
