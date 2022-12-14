const GAME_INFORMATION = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
});

const ERROR_MESSAGE = Object.freeze({
  format: '1부터 9까지의 서로 다른 수로 이루어진 세 자리 숫자를 입력해주세요',
  deplication: '각 자리의 숫자는 모두 달라야 합니다',
});
module.exports = { GAME_INFORMATION, ERROR_MESSAGE };
