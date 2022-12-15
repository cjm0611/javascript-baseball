const { mockQuestions, mockRandoms, getLogSpy } = require('./ApplicationTest');
const App = require('../src/App');

describe('재시작 테스트', () => {
  test('게임 10회 (재시작 9회)', () => {
    const randoms = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 3, 5, 2, 4, 6, 3, 5, 7, 4, 6, 8, 5, 7, 9, 9, 5, 1, 1, 5, 9,
    ];
    const answers = [
      '123',
      '1',
      '456',
      '1',
      '789',
      '1',
      '135',
      '1',
      '246',
      '1',
      '357',
      '1',
      '468',
      '1',
      '579',
      '1',
      '951',
      '1',
      '159',
      '2',
    ];
    const logSpy = getLogSpy();
    const messages = [
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '3스트라이크',
      '게임 종료',
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
