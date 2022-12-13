const { Random } = require('@woowacourse/mission-utils');

const BaseballMaker = {
  makeBaseball(size) {
    const baseballNumbers = [];
    while (baseballNumbers.length < size) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!baseballNumbers.includes(randomNumber)) {
        baseballNumbers.push(randomNumber);
      }
    }

    return baseballNumbers.join('');
  },
};
module.exports = BaseballMaker;
