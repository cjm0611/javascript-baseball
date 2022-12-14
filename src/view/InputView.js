const { Console } = require('@woowacourse/mission-utils');
const { GAME_INFORMATION } = require('../constant/Message');
const { BASEBALL_CONSTANT } = require('../constant/GameSetting');

const InputView = {
  readNumber(callback) {
    Console.readLine(GAME_INFORMATION.input, (input) => {
      this.handleExceptionWrongInput(input);
      callback(input);
    });
  },

  handleExceptionWrongInput(number) {
    this.handleExceptionNotNumber(number);
    this.handleExceptionWrongLength(number);
    this.handleExceptionOutOfRange(number);
    this.handleExceptionDeplication(number);
  },

  handleExceptionNotNumber(number) {
    if (Number.isNaN(Number(number))) {
      throw '숫자만 입력해주세요';
    }
  },

  handleExceptionWrongLength(number) {
    if (number.length !== 3) {
      throw '세 자리의 숫자를 입력해주세요';
    }
  },

  handleExceptionOutOfRange(number) {
    [...number].forEach((digit) => {
      if (digit < BASEBALL_CONSTANT.min || digit > BASEBALL_CONSTANT.max) {
        throw '각 자리의 숫자는 1~9만 허용합니다';
      }
    });
  },

  handleExceptionDeplication(number) {
    const numberSet = new Set(number);
    if (number.length !== numberSet.size) {
      throw '각 자리의 숫자는 모두 달라야 합니다';
    }
  },
};
module.exports = InputView;
