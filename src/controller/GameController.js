const { Console } = require('@woowacourse/mission-utils');
const { BASEBALL_CONSTANT } = require('../constant/GameSetting');
const { GAME_INFORMATION } = require('../constant/Message');
const BaseballGame = require('../model/BaseballGame');
const BaseballMaker = require('../model/BaseballMaker');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #game;

  constructor() {
    const answer = BaseballMaker.makeBaseball(BASEBALL_CONSTANT.length);
    this.#game = new BaseballGame(answer);
  }

  start() {
    Console.print(GAME_INFORMATION.start);
    this.readPlayeGuess();
  }

  readPlayeGuess() {
    const onDeliveryInputNumber = (input) => {
      const { ball, strike } = this.#game.calculateScore(input);
      const IS_ANSWER = this.#game.checkAnswer(input);
      OutputView.printScore(ball, strike);
      if (IS_ANSWER) {
        return;
      }

      this.readPlayeGuess();
    };

    InputView.readNumber(onDeliveryInputNumber);
  }
}

module.exports = GameController;
