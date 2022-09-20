const model = {
    BOTTOM: 55, // hvor langt ned fuglen kan falle
    TOP: 0,
    LEFT: 99,
     RIGHT: 0, // for å stoppe 

    GRAVITY: 0.4,
    SPEED: 0.5,

    score: 0,
    // Y axis top = 0 bottom = 60
    bird: { Height: 10, Width:10, yaxis: 20, xaxis: 5, img: "/assets/getvinger.svg", },
    collisionObject: { X: 0, Y: 0, Width: 1, Height: 25 },

    listOfCollisionObjects:[{ X: 0, Y: 0, Width: 1, Height: 25 },
                            { X: 0, Y: 0, Width: 1, Height: 35 },
                            { X: 0, Y: 0, Width: 1, Height: 15 },
                            { X: 0, Y: 0, Width: 1, Height: 25 },
                        
                        ],

    counter: 0,

}