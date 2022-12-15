const InputView = require('../src/view/InputView');
const { ERROR_MESSAGE } = require('../src/constant/Message');

describe('재시작 또는 게임 종료 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], [' 1'], [' 2']])('공백이 있는 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongChoice(input);
    }).toThrow(ERROR_MESSAGE.wrongChoice);
  });

  test.each([['r'], ['q'], ['R'], ['Q']])('문자인 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongChoice(input);
    }).toThrow(ERROR_MESSAGE.wrongChoice);
  });

  test.each([['0'], ['-1'], ['1.2'], ['3']])('1 또는 2가 아닌 숫자인 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongChoice(input);
    }).toThrow(ERROR_MESSAGE.wrongChoice);
  });
});
