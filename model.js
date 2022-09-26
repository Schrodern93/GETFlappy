

const model = {
    birdIsAlive: true,
    BOTTOM: 69, // hvor langt ned fuglen kan falle
    TOP: 0,
    LEFT: 99,
    RIGHT: 0, // for å stoppe 

    GRAVITY: 0.4,
    SPEED: 0.5,

    score: 0,
    // Y axis top = 0 bottom = 69
    bird: { Height: 10, Width: 10, yaxis:40, xaxis: 5, img: "/assets/getvinger.svg", },
    collisionObject: { X: 0, Y: 0, Width: 1, Height: 25 },

    listOfCollisionObjects: [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 32 },
        { X: 0, Y: 0, Width: 1, Height: 40 },
        { X: 0, Y: 0, Width: 1, Height: 5 },

    ],

    bottomListOfCollisionObjects: [
        { X: 0, Y: 0, Width: 1, Height: 25 },
        { X: 0, Y: 0, Width: 1, Height: 34 },
        { X: 0, Y: 0, Width: 1, Height: 40 },
        { X: 0, Y: 0, Width: 1, Height: 5 },

    ],

    counter: 0,

    scoreBoard:[
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
        {name: "Joakim", score:12},
    ],
}