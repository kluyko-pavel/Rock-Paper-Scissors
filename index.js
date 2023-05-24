const GameLogic = require("./GameLogic");
const Game = require("./Game");
const HelpTable = require("./HelpTable");
const readline = require("readline");

const args = process.argv.slice(2);
const choices = [...args];
const length = choices.length;
const rules = new GameLogic(choices).rules;

if (length % 2 === 0) {
  console.log("Error: Number of choices must be odd");
  process.exit(1);
} else if (length < 3) {
  console.log("Error: Number of choices must be >=3");
  process.exit(1);
}

const uniqueChoices = new Set(choices);
if (uniqueChoices.size !== length) {
  console.log("Error: Choices must be unique");
  process.exit(1);
}

const game = new Game(choices);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your move: ", (userChoice) => {
  rl.close();

  if (userChoice === "help") {
    const helpTable = new HelpTable(choices, rules);
    console.log(helpTable.getTable());
    process.exit(0);
  } else if (userChoice === "0") {
    process.exit(0);
  } else if (!choices.includes(userChoice)) {
    console.log(
      `Error: Invalid choice. Possible choices: ${choices.join(", ")}`
    );
  } else {
    game.play(userChoice);
  }
});
