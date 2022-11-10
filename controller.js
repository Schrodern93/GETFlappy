function fly() {
    checkIfBottomIsHit();
    checkIfTopIsHit();
    model.bird.yaxis += model.GRAVITY;
    // console.log(model)
}

function up() {
    // if (model.bird.yaxis <= (model.TOP - model.bird.Height - 2)) { /* GAME OVER */ };
    model.bird.yaxis -= 7;
}

function checkIfBottomIsHit() {
    if (model.bird.yaxis > model.BOTTOM) {
        model.birdIsAlive = false;
        setTimeout(alert("Du traff bakken!"),1000);
    }
}
function checkIfTopIsHit() {
    if (model.bird.yaxis + model.bird.Height < model.TOP) {
        model.birdIsAlive = false;
        setTimeout(alert("Du traff scoren din :P"),1000);
    }
}

function moveObject(i) {
    if (model.listOfCollisionObjects[i].X < model.RIGHT) {
        model.listOfCollisionObjects[i].X = model.LEFT;
        model.bottomListOfCollisionObjects[i].X = model.LEFT;

        // if (model.score != 0) {
            model.counter = model.counter >= model.listOfCollisionObjects.length - 1 ? 0 : model.counter + 1;
        // }

        console.log("counter:" + model.counter)
        model.birdThroughObject = false;
    }
    else {
        model.listOfCollisionObjects[i].X -= model.SPEED;
        model.bottomListOfCollisionObjects[i].X -= model.SPEED;
    }
}

function CheckForCollision(i) {

    const birdCenter = model.bird.xaxis + (model.bird.Width / 2);
    const colPosLeft = model.listOfCollisionObjects[i].X - model.margin;
    const colPosRight = model.listOfCollisionObjects[i].X + model.margin;
    const colHeigh = model.listOfCollisionObjects[i].Height - (model.bird.Height + 6);
    const colLow = model.BOTTOM - model.bottomListOfCollisionObjects[i].Height;

    //denne må fikses 
    if (colPosRight >= birdCenter && colPosLeft  <= birdCenter) {
        if (model.bird.yaxis < colHeigh ||
            model.bird.yaxis > colLow) {  // +2 for twerking , må fikse litt til
            model.birdIsAlive = false;
            setTimeout(alert("Du traff en stolpe!"),1000);
        }
        // model.bird.yaxis + model.bird.Height + 3 <= model.listOfCollisionObjects[i].Height || 
        if (model.birdIsAlive & !model.birdThroughObject) {
            model.birdThroughObject = true;
            model.score++;
            model.SPEED += 0.05;
            model.margin += 0.05;
        }
    }
}

//69 - model.bottomListOfCollisionObjects[i].Height = 64 til 19      0 + model.listOfCollisionObjects[i].Height = 5 til 40  
// bird height = 10 
function updateGame() {
    CheckForCollision(model.counter);
    moveObject(model.counter);
    fly();
    if (!model.birdIsAlive) endGame();
    gameview();
}

function endGame() {
    model.birdIsAlive = false;
  
    clearInterval(gameLoop);
    addToScoreboard();
}

function startGame() {
    initGame();
    gameLoop = setInterval(updateGame, 25);

}
addEventListener(); //skal kun kjøres en gang, hvis ikke blir det kluss for spiller 2, 3 4, osv
function addEventListener() {
    document.addEventListener('keyup', event => {
        // console.log("event triggrer ")
        if (event.code === 'Space') up();
    });
}

function initGame() {
    console.log("init blir kjørt")
    model.birdIsAlive = true;
    model.birdThroughObject = false;
    model.GRAVITY = 0.5;
    model.SPEED = 0.5;
    model.score = 0;
    model.margin = 0.5;
    model.bird = { Height: 10, Width: 10, yaxis: 30, xaxis: 5, img: "assets/getvinger.svg" };
    model.counter = 0;

    model.listOfCollisionObjects = [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 32 },
        { X: 0, Y: 0, Width: 1, Height: 38 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 10 },

    ];

    model.bottomListOfCollisionObjects = [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 34 },
        { X: 0, Y: 0, Width: 1, Height: 38 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 45 },

    ];

}