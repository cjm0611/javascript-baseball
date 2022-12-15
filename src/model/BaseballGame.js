class BaseballGame {
  #answer;

  setAnswer(answer) {
    this.#answer = answer;
  }

  calculateScore(playerGuess) {
    const score = {
      ball: 0,
      strike: 0,
    };

    [...playerGuess].forEach((number, numberIndex) => {
      const IS_NUMBER_IN_ANSWER = this.#answer.indexOf(number) !== -1;
      const IS_SAME_INDEX = this.#answer.indexOf(number) === numberIndex;
      if (IS_NUMBER_IN_ANSWER && IS_SAME_INDEX) {
        score.strike += 1;
      }

      if (IS_NUMBER_IN_ANSWER && !IS_SAME_INDEX) {
        score.ball += 1;
      }
    });

    return score;
  }

  checkAnswer(playerGuess) {
    return playerGuess === this.#answer;
  }
}

module.exports = BaseballGame;
