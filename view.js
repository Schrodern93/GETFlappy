setInterval(fly, 25);
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        up();
    }
});

function gameview() {
    let html = " <div id='title'>GET ACADEMY</div>";

    html += `
        <div id="gamescreen">
            <img id="bird" src="${model.bird.img}" style="top:${model.bird.yaxis}vh;"'>
        </div>`;


    document.getElementById("game").innerHTML = html;
}