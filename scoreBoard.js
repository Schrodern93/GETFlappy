createScoreboard()
function createScoreboard() {
    let html ="<h1>SCOREBOARD</h1>";

    for (let i = 0; i < 10; i++) {
       
        html += `<div class="scoreBoard">${model.scoreBoard[i].name}  ${model.scoreBoard[i].score}</div>`
        
    }

    
    document.getElementById("scoreBoardContainer").innerHTML = html;
}