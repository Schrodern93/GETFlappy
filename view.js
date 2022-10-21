var gameLoop;

function gameview() {
    let html = "";
    if(!model.birdIsAlive) html += gameOverView();
    else html += `
        <div id="score">${model.score}</div>
      
            ${createWalls(model.counter)}

        <div id="bird" style="top:${model.bird.yaxis}%; left:${model.bird.xaxis}%; width: ${model.bird.Width}%;">
            <img style="heigth:${model.bird.Height}%; width: 100%;"  src="${model.bird.img}"/>
        </div>`;



    document.getElementById("game").innerHTML = html;
}

function gameOverView() {
    return `<div class="startScreen">
                <div>GAME OVER </div>
                <div>DIN SCORE: ${model.score} </div>
                <button style="width: 240px; height:100px;" onclick="showStartScreen();">START NYTT SPILL</button>
                </div>`;
}

function createWalls(i) {
    let html = "";

    html += `
                <div class="wall" 
                    style="top:${model.listOfCollisionObjects[i].Y}%; 
                    left:${model.listOfCollisionObjects[i].X}%; 
                    width:${model.listOfCollisionObjects[i].Width}%; 
                    height:${model.listOfCollisionObjects[i].Height}%;">
                </div>

                <div class="wall" 
                    style="bottom:${model.bottomListOfCollisionObjects[i].Y}%; 
                    left:${model.bottomListOfCollisionObjects[i].X}%; 
                    width:${model.bottomListOfCollisionObjects[i].Width}%; 
                    height:${model.bottomListOfCollisionObjects[i].Height}%;">
                </div>`;
    return html;
}


