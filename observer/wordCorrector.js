let pageNumber = 0;

const wordParse = (pageNo, word) => {
  console.log('WordParsing, Page#', pageNumber, 'word ', word.word);
}

const setPage = (pageNo) => {
  console.log('page parsing ', pageNo);
  pageNumber = pageNo;
}

const index = (parser) => {
  parser.on('word-parse', wordParse)
    .on('page-parse', setPage);
}

module.exports = { index };

