
gameview()
function gameview(){
let html = " <div id='title'>GET ACADEMY</div>";

html+= `
<div id="gamescreen">
<img id="bird" src="${model.bird.img}">
</div>`


document.getElementById("game").innerHTML = html;
}