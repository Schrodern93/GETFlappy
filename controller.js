function fly(){
    model.bird.yaxis += 1.5;
    gameview();
}

function up(){
    model.bird.yaxis -= 15;
    gameview();
}