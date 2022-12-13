const GameController = require('./controller/GameController');

class App {
  #game = new GameController();

  play() {
    this.#game.start();
  }
}

module.exports = App;
