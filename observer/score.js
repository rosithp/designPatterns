
const scores = {};
const wordParse = (pageNo, word) => {
  if (pageNo) scores[pageNo] += 1;

}

const setPage = (pageNo, page) => {
  if (!scores[pageNo]) {
    scores[pageNo] = 0;
  }
}
const getScore = (pageNo = null) => {
  console.log('score # ', scores);
  if (pageNo) {
    return scores[pageNo];
  }
  return scores;
}

const index = (parser) => {
  parser.on('word-parse', wordParse)
    .on('page-parse', setPage);
}

module.exports = { index, getScore };