function fly() {
    checkIfBottomIsHit();
    model.bird.yaxis += 0.5;
    console.log(model.bird.yaxis);
}

function up() {
    if (model.bird.yaxis <= 5) {
        alert('Game Over');
    };
    var result = model.bird.yaxis -= 15;
    model.bird.yaxis -= result < 0
}

function checkIfBottomIsHit() {
    if (model.bird.yaxis >= 60) {
        model.bird.yaxis = 0;
    }
}

function moveObject() {
    if(model.collisionObject.X < 1) model.collisionObject.X = 75;
    model.collisionObject.X -= 0.5
}
function CheckForCollision() {
    if(model.collisionObject.X == model.bird.xaxis){
        if(model.bird.yaxis <= model.collisionObject.Height) alert('I am flapped');
        else model.score++;
    }
}
function updateGame() {
    fly();
    CheckForCollision();
    moveObject();
    gameview();
}