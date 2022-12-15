const { BASEBALL_CONSTANT } = require('./GameSetting');

const GAME_INFORMATION = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  end: `${BASEBALL_CONSTANT.length}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  retryOrQuit: `게임을 새로 시작하려면 ${BASEBALL_CONSTANT.retry}, 종료하려면 ${BASEBALL_CONSTANT.quit}를 입력하세요.\n`,
});

const ERROR_MESSAGE = Object.freeze({
  format: '1부터 9까지의 서로 다른 수로 이루어진 세 자리 숫자를 입력해주세요',
  deplication: '각 자리의 숫자는 모두 달라야 합니다',
  wrongChoice: `${BASEBALL_CONSTANT.retry} 또는 ${BASEBALL_CONSTANT.quit}를 입력해주세요`,
});

const SCORE_MESSAGE = Object.freeze({
  zeroCount: '낫싱',
  ballCount: (ball) => `${ball}볼`,
  strikeCount: (strike) => `${strike}스트라이크`,
});

module.exports = { GAME_INFORMATION, ERROR_MESSAGE, SCORE_MESSAGE };
