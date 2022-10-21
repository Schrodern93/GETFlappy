function addToScoreboard() {

  const i = localStorage.length;
  
  let playerName = model.input.name.trim();
  if(playerName === "") playerName = `Anonym${i}Fugl`;

  localStorage.setItem(i, playerName + "," + model.score);

  model.scoreBoard = getScoreBoardFromLocalStorage();
  model.input.name = '';
  createScoreboard();
}

function getScoreBoardFromLocalStorage() {
  let scoreList = [];
  for (let i = 0; i < localStorage.length; i++) {

    const details = localStorage[i].split(',');

    const name = details[0];
    const score = parseInt(details[1]);
    scoreList.push({ name, score });
  }

  return scoreList.sort((a, b) => b.score - a.score);
}