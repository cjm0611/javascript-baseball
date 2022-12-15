const { Console } = require('@woowacourse/mission-utils');
const { GAME_INFORMATION, ERROR_MESSAGE } = require('../constant/Message');

const InputView = {
  readNumber(callback) {
    Console.readLine(GAME_INFORMATION.input, (input) => {
      this.handleExceptionWrongInput(input);
      callback(input);
    });
  },

  handleExceptionWrongInput(number) {
    this.handleExceptionWrongFormat(number);
    this.handleExceptionDeplication(number);
  },

  handleExceptionWrongFormat(number) {
    const regex = /^[1-9]{3}$/;
    if (!regex.test(number)) {
      throw ERROR_MESSAGE.format;
    }
  },

  handleExceptionDeplication(number) {
    const numberSet = new Set(number);
    if (number.length !== numberSet.size) {
      throw ERROR_MESSAGE.deplication;
    }
  },
};
module.exports = InputView;
