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
    this.#game = new BaseballGame();
  }

  start() {
    Console.print(GAME_INFORMATION.start);
    this.makeAnswer();
  }

  makeAnswer() {
    const answer = BaseballMaker.makeBaseball(BASEBALL_CONSTANT.length);
    this.#game.setAnswer(answer);
    this.readPlayeGuess();
  }

  readPlayeGuess() {
    const onDeliveryInputNumber = (input) => {
      const { ball, strike } = this.#game.calculateScore(input);
      const IS_ANSWER = this.#game.checkAnswer(input);
      this.printScore(ball, strike, IS_ANSWER);
    };

    InputView.readNumber(onDeliveryInputNumber);
  }

  printScore(ball, strike, IS_ANSWER) {
    OutputView.printScore(ball, strike);
    if (!IS_ANSWER) {
      this.readPlayeGuess();
      return;
    }

    OutputView.printGameEnd();
    this.readRetryChoice();
  }

  readRetryChoice() {
    const onDeliverRetryChoice = (input) => {
      if (input === BASEBALL_CONSTANT.retry) {
        this.makeAnswer();
      }

      if (input === BASEBALL_CONSTANT.quit) {
        this.gameQuit();
      }
    };

    InputView.readRetryChoice(onDeliverRetryChoice);
  }

  gameQuit() {
    Console.close();
  }
}

module.exports = GameController;
