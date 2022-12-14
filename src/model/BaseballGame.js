class BaseballGame {
  #answer;

  #score = {
    ball: 0,
    strike: 0,
  };

  constructor(number) {
    this.#answer = number;
  }

  calculateScore(playerGuess) {
    [...playerGuess].forEach((number, numberIndex) => {
      const IS_NUMBER_IN_ANSWER = this.#answer.indexOf(number) !== -1;
      const IS_SAME_INDEX = this.#answer.indexOf(number) === numberIndex;
      if (IS_NUMBER_IN_ANSWER && !IS_SAME_INDEX) {
        this.#score.ball += 1;
      }

      if (IS_NUMBER_IN_ANSWER && IS_SAME_INDEX) {
        this.#score.strike += 1;
      }
    });

    return this.#score;
  }
}

module.exports = BaseballGame;
