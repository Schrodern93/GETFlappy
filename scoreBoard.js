createScoreboard();
function createScoreboard() {
    let html = "<h1>SCOREBOARD</h1>";
    let records = getScoreBoardFromLocalStorage();

    for (let i = 0; i < records.length; i++) {
        if(i == 10) break;
        const record = records[i];
        html += `
        <div class="scoreBoard">
            <b>${i + 1})</b> 🐤<span id="nameSpan">${record?.name}</span> | <span id="scoreSpan"> ${record?.score} </span>
        </div>`;
    }
    document.getElementById("scoreBoardContainer").innerHTML = html;
}