const { mockQuestions, mockRandoms, getLogSpy } = require('./ApplicationTest');
const App = require('../src/App');

describe('사용자가 입력한 숫자와 정답 숫자 비교', () => {
  test('모든 경우의 수 확인', () => {
    const randoms = [1, 2, 3];
    const answers = ['567', '367', '217', '312', '983', '923', '329', '123'];
    const logSpy = getLogSpy();
    const messages = [
      '낫싱',
      '1볼',
      '2볼',
      '3볼',
      '1스트라이크',
      '2스트라이크',
      '1볼 1스트라이크',
      '3스트라이크',
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
