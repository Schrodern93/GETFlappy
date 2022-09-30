createScoreboard()
function createScoreboard() {
    let html ="<h1>SCOREBOARD</h1>";

    const sortedScores = model.scoreBoard.sort((a, b) => b.score - a.score);

    for (let i = 0; i < 10; i++) {
       
        html += `<div class="scoreBoard"><b>${i +1})</b> ${sortedScores[i].name}  ${sortedScores[i].score}</div>`
        
    }

    
    document.getElementById("scoreBoardContainer").innerHTML = html;
}