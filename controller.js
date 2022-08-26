function fly(){
    model.bird.yaxis += 1.5;
    gameview();
}

function up(){
    var result = model.bird.yaxis -= 15;
    model.bird.yaxis -= result < 0
    gameview();
}