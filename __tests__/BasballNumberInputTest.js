const InputView = require('../src/view/InputView');
const { ERROR_MESSAGE } = require('../src/constant/Message');

describe('사용자 숫자 입력 예외 테스트', () => {
  test.each([[''], [' '], ['\n'], ['3 5'], ['!@#'], ['a3b']])('숫자가 아닌 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongInput(input);
    }).toThrow(ERROR_MESSAGE.format);
  });

  test.each([['12'], ['1234']])('3자리가 아닌 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongInput(input);
    }).toThrow(ERROR_MESSAGE.length);
  });

  test.each([['301'], ['-319'], ['3.5']])('범위가 1~9가 아닌 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongInput(input);
    }).toThrow(ERROR_MESSAGE.range);
  });

  test.each([['339'], ['121']])('중복된 숫자가 있는 경우', (input) => {
    expect(() => {
      InputView.handleExceptionWrongInput(input);
    }).toThrow(ERROR_MESSAGE.deplication);
  });
});
