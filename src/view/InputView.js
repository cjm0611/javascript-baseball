const { Console } = require('@woowacourse/mission-utils');
const { GAME_INFORMATION, ERROR_MESSAGE } = require('../constant/Message');
const { BASEBALL_CONSTANT } = require('../constant/GameSetting');

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

  readRetryChoice(callback) {
    Console.readLine(GAME_INFORMATION.retryOrQuit, (input) => {
      this.handleExceptionWrongChoice(input);
      callback(input);
    });
  },

  handleExceptionWrongChoice(choice) {
    const choices = [BASEBALL_CONSTANT.retry, BASEBALL_CONSTANT.quit];
    if (!choices.includes(choice)) {
      throw ERROR_MESSAGE.wrongChoice;
    }
  },
};
module.exports = InputView;
