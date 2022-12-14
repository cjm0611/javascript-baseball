const { Console } = require('@woowacourse/mission-utils');
const { GAME_INFORMATION } = require('../constant/Message');

const InputView = {
  readNumber(callback) {
    Console.readLine(GAME_INFORMATION.input, (input) => {
      callback(input);
    });
  },
};
module.exports = InputView;
