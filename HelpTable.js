const Table = require("cli-table");

class HelpTable {
  constructor(choices, rules) {
    this.choices = choices;
    this.rules = rules;
    this.table = new Table({
      head: [""].concat(this.choices),
      style: { head: ["cyan"] },
    });
    this.generateTable();
  }

  generateTable() {
    for (let i = 0; i < this.choices.length; i++) {
      const row = [this.choices[i]];
      for (let j = 0; j < this.choices.length; j++) {
        if (i === j) {
          row.push("Draw");
        } else if (
          this.rules[this.choices[i]].win.indexOf(this.choices[j]) >= 0
        ) {
          row.push("Win");
        } else {
          row.push("Lose");
        }
      }
      this.table.push(row);
    }
  }

  getTable() {
    return this.table.toString();
  }
}

module.exports = HelpTable;
