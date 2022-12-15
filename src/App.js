const GameController = require('./controller/GameController');

class App {
  #controller = new GameController();

  play() {
    this.#controller.start();
  }
}

module.exports = App;
