const GAME_INFORMATION = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
});

const ERROR_MESSAGE = Object.freeze({
  format: '숫자만 입력해주세요',
  length: '세 자리의 숫자를 입력해주세요',
  range: '각 자리의 숫자는 1~9만 허용합니다',
  deplication: '각 자리의 숫자는 모두 달라야 합니다',
});
module.exports = { GAME_INFORMATION, ERROR_MESSAGE };
