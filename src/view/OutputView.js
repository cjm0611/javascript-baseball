const { Console } = require('@woowacourse/mission-utils');
const { SCORE_MESSAGE } = require('../constant/Message');

const OutputView = {
  printScore(ball, strike) {
    let scoreInfo = '';
    if (ball > 0 || strike > 0) {
      const printBall = ball > 0 ? SCORE_MESSAGE.ballCount(ball) : '';
      const printStrike = strike > 0 ? SCORE_MESSAGE.strikeCount(strike) : '';
      const blank = ball > 0 && strike > 0 ? ' ' : '';
      scoreInfo = printBall + blank + printStrike;
    } else {
      scoreInfo = SCORE_MESSAGE.zeroCount;
    }

    Console.print(scoreInfo);
  },
};

module.exports = OutputView;
