function scoreCounter() {
    if (model.birdIsAlive = false) {
      localStorage.scoreCount = model.score;
      localStorage.name = model.input.name;
      model.scoreBoard.push()
  }

}
function getScoreBoardFromLocalStorage(){
let person = {};

if(localStorage.name != null){
person.name = localStorage.getItem(localStorage.name)
person.score = localStorage.getItem(localStorage.scoreCount)
}

model.scoreBoard.push(person)
}