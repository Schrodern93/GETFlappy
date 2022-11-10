

const model = {
    BOTTOM: 69, // hvor langt ned fuglen kan falle
    TOP: 0,
    LEFT: 99,
    RIGHT: 0, // for å stoppe 
    GRAVITY: 0.5,
    SPEED: 0.5,
    score: 0,
    margin: 0.5,

    input:{
        name:"",
    },
    // Y axis top = 0 bottom = 69
    bird: { Height: 10, Width: 10, yaxis:30, xaxis: 5, img: "/assets/getvinger.svg", },
    collisionObject: { X: 0, Y: 0, Width: 1, Height: 25 },

    listOfCollisionObjects: [
        { X: 0, Y: 0, Width: 1, Height: 25},
        { X: 0, Y: 0, Width: 1, Height: 32 },
        { X: 0, Y: 0, Width: 1, Height: 38 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 5 },

    ],
    // maks høyde på stolpene til sammen er 74
    bottomListOfCollisionObjects: [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 34 },
        { X: 0, Y: 0, Width: 1, Height: 38 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 54 },
        { X: 0, Y: 0, Width: 1, Height: 20 },
        { X: 0, Y: 0, Width: 1, Height: 5 },

    ],

    counter: 0,

    scoreBoard:[],
}