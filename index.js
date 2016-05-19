"use strict";

var Tetris = require('./tetris')

function gameStart(){
    let randNum = Math.floor(Math.random()*7)
    let tetris = new Tetris(randNum)
    tetris.draw();
}

function keyProess(e){
    // e = e || window.event;  
    switch(e.keyCode){  
        case 37:  //left key up
            // alert('left')
            console.log('left')
            break;  
        case 38:  //up key up
            alert('up')
            break;  
        case 39:  //right key up
            alert('right')
            break;  
        case 40:  //down key up
            alert('down')
            break;  
    }  
}

document.body.onkeyup = function(e){
    keyProess(e);
}

document.body.onload = gameStart();