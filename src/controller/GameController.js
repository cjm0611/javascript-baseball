const { Console } = require('@woowacourse/mission-utils');
const { BASEBALL_CONSTANT } = require('../constant/GameSetting');
const { GAME_INFORMATION } = require('../constant/Message');
const BaseballGame = require('../model/BaseballGame');
const BaseballMaker = require('../model/BaseballMaker');
const InputView = require('../view/InputView');

class GameController {
  #game;

  constructor() {
    const answer = BaseballMaker.makeBaseball(BASEBALL_CONSTANT.length);
    this.#game = new BaseballGame(answer);
  }

  start() {
    Console.print(GAME_INFORMATION.start);
    const onDeliveryInputNumber = (input) => {
      this.#game.calculateScore(input);
    };
    InputView.readNumber(onDeliveryInputNumber);
  }
}

module.exports = GameController;
