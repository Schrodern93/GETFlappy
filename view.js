var gameLoop;

function gameview() {
    let html = "";
    if (model.birdIsAlive == false) {
        html += 'GAME OVER <button onclick="startOver()"> start nytt spill</button>'; // TODO: Lage nytt view
    }
    else {
        html += `
        <div id="score">${model.score}</div>
      
            ${createWalls(model.counter)}

        <div id="bird" style="top:${model.bird.yaxis}%; left:${model.bird.xaxis}%; width: ${model.bird.Width}%;">
            <img style="heigth:${model.bird.Height}%; width: 100%;"  src="${model.bird.img}"/>
        </div>`;
    }


    document.getElementById("game").innerHTML = html;
}

function startOver(){
    alert('funker')
    window.location.reload(); // Denne fjerner lagrede verdier i scoreboard, må legge til local storage for at det ikke skal skje 
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


