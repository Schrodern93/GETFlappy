showStartScreen();
function showStartScreen(){
    let html = `
    <div class="startScreen">
        <div>START NYTT SPILL</div>
        <input type="text" placeholder="Navn" oninput="model.input.name=this.value"></input>
        <button onclick="startGame()">START</button>
    </div>
    `;
    document.getElementById("game").innerHTML = html;
}

// model.input.name