const { EventEmitter } = require('events');
const doc = [
  {
    pageNo: 1, words: [
      { word: 'a' },
      { word: 'b' },
      { word: 'c' },
      { word: 'd' },
      { word: 'e' },
    ]
  },
  {
    pageNo: 2, words: [
      { word: 'f' },
      { word: 'g' },
      { word: 'h' },
      { word: 'i' },
      { word: 'j' },
    ]
  },
]

class HOCRParser extends EventEmitter {
  constructor() {
    super();
    EventEmitter.call(this);
    this._doc = doc;
  }

  parsePage() {
    var self = this;
    for (let i = 0; i < this._doc.length; i++) {
      const page = this._doc[i];
      const pageNumber = i + 1;
      self.emit('page-parse', pageNumber, page);
      this.parseWord(page, pageNumber);
    }
  }

  parseWord(page, pageNumber) {
    var self = this;
    for (let j = 0; j < page.words.length; j++) {
      const word = page.words[j];
      self.emit('word-parse', pageNumber, word)
    }
  }
}

module.exports = {
  HOCRParser
}
