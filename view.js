setInterval(updateGame, 25);
document.addEventListener('keyup', event => {
    if (event.code === 'Space') up();
});

function gameview() {
    let html = "";
    html += `
            <div id="score">${model.score}</div>
            <div class="wall" 
                style="top:${model.collisionObject.Y}vh; 
                left:${model.collisionObject.X}vw; 
                width:${model.collisionObject.Width}vw; 
                height:${model.collisionObject.Height}vh;">
            </div>

            <img id="bird" src="${model.bird.img}" 
                style="top:${model.bird.yaxis}vh; 
                left:${model.bird.xaxis}"'>`;


    document.getElementById("game").innerHTML = html;
}