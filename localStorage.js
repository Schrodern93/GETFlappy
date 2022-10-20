function addToScoreboard() {

  let board = localStorage.getItem('scoreBoard');
  console.log(board)
  let person = {
    score: model.score,
    name: model.input.name
  };

  // board.push(person);
}
function getScoreBoardFromLocalStorage() {


  let scoreBoard = localStorage.getItem('scoreBoard');

  if(scoreBoard.length == 0) {
   localStorage.setItem('scoreBoard', []);
  }

  scoreBoard = localStorage.getItem('scoreBoard');
  console.log(scoreBoard, "scoreBoard etter")
  model.scoreBoard = scoreBoard;

}