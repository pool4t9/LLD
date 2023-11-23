import TicTacToe from "./TicTacToe";

function main(): void {
  let ticTacToe = new TicTacToe();
// 
  ticTacToe.makeMove(0, 0, "O"); // 1
  ticTacToe.makeMove(0, 1, "X"); // 2
  ticTacToe.makeMove(1, 1, "O"); // 1
  ticTacToe.makeMove(0, 2, "X"); // 2
  ticTacToe.makeMove(2, 2, "O"); // 1
  
  ticTacToe.makeMove(0, 0, "O"); // 1
  ticTacToe.makeMove(0, 1, "X"); // 2
  ticTacToe.makeMove(1, 1, "O"); // 1
  ticTacToe.makeMove(0, 2, "X"); // 2
  ticTacToe.makeMove(2, 2, "O"); // 1

  ticTacToe.makeMove(0, 0, "O"); // 1
  ticTacToe.makeMove(0, 1, "X"); // 2
  ticTacToe.makeMove(1, 1, "O"); // 1
  ticTacToe.makeMove(0, 2, "X"); // 2
  ticTacToe.makeMove(2, 2, "O"); // 1
  console.log(ticTacToe.history);
}

main();
