
/* monster walk */

// импорт

let game = document.getElementById('game');
let menu = document.getElementById('menu');
let death = document.getElementById('death');
let healthpoints = document.querySelector('.healthpoints');
let waterpoints = document.querySelector('.waterpoints');
let output = document.querySelector('#output');
let prompt = document.querySelector('#prompt');
let input = document.querySelector('#prompt input');
let coord = document.querySelector('.coordinats');
let abt = document.querySelector('#about');
addEventListener('keydown', e => keyboard(e));


// переменные
var hp = 3;
var pX = 0;
var pY = 0;
var nonlistenkeyboard = true;
var water = 3;
var totem = false;
var allcom = 0;
var first = true;
var zabroshkaX;
var zabroshkaX;

print("для передвижения используй клавищи W,A,S,D");
// паузы

function start() {
    menu.style.display = 'none';
    game.style.display = 'flex';
    death.style.display = 'none';
    abt.style.display = 'none';
    nonlistenkeyboard = false;
    first = false;
}
function abot() {
    menu.style.display = 'none';
    game.style.display = 'none';
    death.style.display = 'none';
    abt.style.display = 'flex';
    nonlistenkeyboard = true;
}
function deathplayer() {
    menu.style.display = 'none';
    game.style.display = 'none';
    death.style.display = 'flex';
    abt.style.display = 'none';
    nonlistenkeyboard = true;
}

function pause() {
    game.style.display = 'none';
    menu.style.display = 'flex';
    death.style.display = 'none';
    abt.style.display = 'none';
    nonlistenkeyboard = true;
}

// обновление

setInterval(function() {
    healthpoints.innerHTML = '❤'.repeat(hp);
    waterpoints.innerHTML = 'ⲟ'.repeat(water);
    switch (hp){
        case 7:
            hp--;
        case 0:
            if (totem == true){
                hp++;
                totem == false;
            }
            healthpoints.innerHTML = '';
            deathplayer()
            hp = 3;
            pX = 0;
            pY = 0;
            break;
        }
    coord.innerHTML = ('↑' + pX + ' ' +  pY + '→');
}, 10);

function bluring(){
    nonlistenkeyboard = false;
}
function focusing(){
    nonlistenkeyboard = true;
}

// чтение с клавиатуры
function keyboard(e){
    if (first == true) return;
    if (e.code == 'Escape'){
        console.log('esc');
        if(menu.style.display == 'none')pause();
        else start();
        
    }
    if (nonlistenkeyboard == true) return;
    switch (e.code){
        case 'KeyW':
            pY++;
            console.log(pX, pY);
            break;
        case 'KeyA':
            pX--;
            console.log(pX, pY);
            break;
        case 'KeyS':
            pY--;
            console.log(pX, pY);
            break;
        case 'KeyD':
            pX++;
            console.log(pX, pY);
            break;
    }
    coordinatesPlayer = pX + " " + pY;

    switch(coordinatesPlayer){
        case '1 1':
        break;
        case '2 3':
            print("aaaaaaaaa")
        break;  
    }
    
}

function print(message) {
    let list = document.querySelector('#output');
    list.insertAdjacentHTML('afterbegin', '<li class = "out">' + message + '</li>')
    allcom++
    console.log("print");
}

prompt.addEventListener('submit', handleSubmit);
input.focus();

function handleSubmit(event) {
    event.preventDefault();
    processInput(input.value);
    input.value= "";
}

function randomcoord(radius){
    let randY = pY+(Math.floor(Math.random()*radius))-(radius/2);
    let randX = pX+(Math.floor(Math.random()*radius))-(radius/2);
    return [randX, randY];
}

function processInput(input) {
    if (allcom == 1) output.firstChild.remove();
    if (!input) return;
    input.value= "";
    
    if (allcom > 20) output.lastChild.remove();
    if (input == "clr") {
      print(input);
      clr();
      return;
    } else if (input == "help") {
      print(input);
      output.firstChild.remove();
      print("для передвижения используй клавищи W,A,S,D");
      return;
    } else if (input == "play") {
        print('передвигайся с помощью wasd, ecape - вернуться')
        
      return;
    }

    print(input);
    return;
}