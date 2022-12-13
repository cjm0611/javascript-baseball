const { Console } = require('@woowacourse/mission-utils');
const { GAME_INFORMATION } = require('../constant/Message');

class GameController {
  start() {
    Console.print(GAME_INFORMATION.start);
  }
}

module.exports = GameController;
