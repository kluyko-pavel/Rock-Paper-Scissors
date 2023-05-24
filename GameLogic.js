class GameLogic {
  constructor(choices) {
    this.choices = choices;
    this.length = choices.length;
    this.rules = {};

    for (let i = 0; i < choices.length; i++) {
      const half = Math.floor(choices.length / 2);
      const prev = i > 0 ? i - 1 : choices.length - 1;
      const next = i < choices.length - 1 ? i + 1 : 0;

      const win = choices.slice(next, next + half);
      const lose = choices.slice(prev - half + 1, prev + 1);

      this.rules[choices[i]] = { win, lose };
    }
  }

  play(userChoice) {
    const computerChoice =
      this.choices[Math.floor(Math.random() * this.length)];
    const result = this.determineWinner(userChoice, computerChoice);
    return { userChoice, computerChoice, result };
  }

  determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Draw";
    } else if (this.rules[userChoice].win.includes(computerChoice)) {
      return "Win";
    } else {
      return "Lose";
    }
  }
}

module.exports = GameLogic;
