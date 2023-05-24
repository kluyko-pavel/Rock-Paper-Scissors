const GameLogic = require("./GameLogic");
const HmacGenerator = require("./HmacGenerator");
const KeyGenerator = require("./KeyGenerator");

class Game {
  constructor(choices) {
    this.game = new GameLogic(choices);
    this.key = KeyGenerator.generateKey();

    console.log(`Possible choices: ${choices.join(", ")}`);
    console.log(`To exit the game, enter 0`);
    console.log(`To get help, enter "help"`);
    console.log("------------------------");
  }

  play(userChoice) {
    const result = this.game.play(userChoice);
    const hmac = HmacGenerator.generateHmac(this.key, result.computerChoice);
    console.log(`HMAC: ${hmac}`);
    console.log(`Your choice: ${result.userChoice}`);
    console.log(`Computer choice: ${result.computerChoice}`);
    console.log(`Result: ${result.result}`);
    console.log(`Key: ${this.key}`);
  }
}

module.exports = Game;
