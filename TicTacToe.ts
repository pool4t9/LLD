interface Moves {
  row: number;
  col: number;
  player: String;
}

interface Record {
  moves: Moves[];
  winner: String;
}

class TicTacToe {
  board: String[][];
  player: String;
  gameStatus: string;
  static temp: TicTacToe;
  track: Moves[];
  chances: number;
  history: Record[];

  constructor() {
    this.board = new Array(3).fill(0).map(() => new Array(3).fill("_"));
    this.player = "O";
    this.gameStatus = "Process";
    this.track = [];
    this.chances = 0;
    this.history = [];
  }

  print(): void {
    for (let i = 0; i < 3; i++) {
      let temp = "";
      for (let j = 0; j < 3; j++) {
        temp += this.board[i][j] + " ";
      }
      console.log(temp);
    }
  }

  makeMove(i: number, j: number, player: String): boolean {
    if (this.board[i][j] === "_") {
      this.chances++;
      this.board[i][j] = player;
      if (this.checkWinner() != "Draw") {
        if (this.chances === 9) {
          this.history.push({ moves: this.track, winner: "Draw" });
          console.log("Match is Draw!");
        }
        console.log(`Winner is ${player}`);
        this.history.push({ moves: this.track, winner: this.player });
        // process.exit(0);
        this.reset();
        // process.exit(0);
      }
      this.track.push({ row: i, col: j, player: this.player });
      this.player = this.player === "X" ? "O" : "X";
      return true;
    }
    return false;
  }

  getBoard(): String[][] {
    return this.board;
  }

  checkWinner(): String {
    for (let i = 0; i < 3; i++) {
      // Check rows
      if (
        this.board[i][0] !== "_" &&
        this.board[i][0] === this.board[i][1] &&
        this.board[i][0] === this.board[i][2]
      ) {
        return this.board[i][0];
      }
      // Check columns
      if (
        this.board[0][i] !== "_" &&
        this.board[0][i] === this.board[1][i] &&
        this.board[0][i] === this.board[2][i]
      ) {
        return this.board[0][i];
      }
    }

    // Check diagonals
    if (
      this.board[0][0] == this.player &&
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2]
    ) {
      return this.board[0][0];
    }

    if (
      this.board[0][2] == this.player &&
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0]
    ) {
      return this.board[0][2];
    }
    return "Draw";
  }
  reset(): void {
    this.board = new Array(3).fill(0).map((_) => new Array(3).fill("_"));
    this.track = [];
    this.player = "O";
  }
  // undo(): void {
  //   const len = this.track.length;
  //   const last = this.track[len - 1];
  //   if (last.player === this.player) {
  //     this.track.pop();
  //     this.board[last.row][last.col] = "_";
  //   }else{
  //     console.log()
  //   }
  // }
}

TicTacToe.temp = new TicTacToe();

export default TicTacToe;
