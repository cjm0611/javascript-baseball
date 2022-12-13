const { Console } = require('@woowacourse/mission-utils');
const { BASEBALL_CONSTANT } = require('../constant/GameSetting');
const { GAME_INFORMATION } = require('../constant/Message');
const BaseballMaker = require('../model/BaseballMaker');

class GameController {
  start() {
    Console.print(GAME_INFORMATION.start);
    BaseballMaker.makeBaseball(BASEBALL_CONSTANT.length);
  }
}

module.exports = GameController;
