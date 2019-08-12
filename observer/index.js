const { HOCRParser } = require('./parser');
const wordCorrector = require('./wordCorrector');
const score = require('./score');

var hocrParser = new HOCRParser();

wordCorrector.index(hocrParser);
score.index(hocrParser);

hocrParser.parsePage();
score.getScore();
console.log(score.getScore(1))