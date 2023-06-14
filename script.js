tikToeField = [new Array(3), new Array(3), new Array(3)];

htmlFieldString = '';

for (let i = 0; i < 3; i++) {
    htmlFieldString = htmlFieldString + '<div class="row">';
    for (let j = 0; j < 3; j++) {
        htmlFieldString = htmlFieldString + `<div class="cell cell-${i}-${j}" data-i="${i}" data-j="${j}"></div>`;
    }
    htmlFieldString = htmlFieldString + '</div>';
}

document.querySelector('.field').innerHTML = htmlFieldString;

let step = 0; 

function onFieldClick(event) {
    let targetElemet = event.target;
    let i = targetElemet.dataset.i;
    let j = targetElemet.dataset.j;

    if (step % 2 === 0){
        document.querySelector(`.cell-${i}-${j}`).innerHTML = 'X';
    } else {
        document.querySelector(`.cell-${i}-${j}`).innerHTML = 'O';
    }
    step++;

    isWinner();
}

function isWinner(){
    let cell00 = document.querySelector('.cell-0-0');
    let cell01 = document.querySelector('.cell-0-1');
    let cell02 = document.querySelector('.cell-0-2');
    let cell10 = document.querySelector('.cell-1-0');
    let cell11 = document.querySelector('.cell-1-1');
    let cell12 = document.querySelector('.cell-1-2');
    let cell20 = document.querySelector('.cell-2-0');
    let cell21 = document.querySelector('.cell-2-1');
    let cell22 = document.querySelector('.cell-2-2');

    if(cell00.innerHTML==='X' && cell01.innerHTML==='X' && cell02.innerHTML==='X'){
        alert('Победил игрок №1')
    } else if(cell10.innerHTML==='X' && cell11.innerHTML==='X' && cell12.innerHTML==='X'){
        alert('Победил игрок №1')
    } else if(cell20.innerHTML==='X' && cell21.innerHTML==='X' && cell22.innerHTML==='X'){
        alert('Победил игрок №1')    
    } else if(cell00.innerHTML==='X' && cell11.innerHTML==='X' && cell22.innerHTML==='X'){
        alert('Победил игрок №1')    
    } else if(cell02.innerHTML==='X' && cell11.innerHTML==='X' && cell20.innerHTML==='X'){
        alert('Победил игрок №1')    
    } else if(cell00.innerHTML==='O' && cell01.innerHTML==='O' && cell02.innerHTML==='O'){
        alert('Победил игрок №2')
    } else if(cell10.innerHTML==='O' && cell11.innerHTML==='O' && cell12.innerHTML==='O'){
        alert('Победил игрок №2')
    } else if(cell20.innerHTML==='O' && cell21.innerHTML==='O' && cell22.innerHTML==='O'){
        alert('Победил игрок №2')
    } else if(cell00.innerHTML==='O' && cell11.innerHTML==='O' && cell22.innerHTML==='O'){
        alert('Победил игрок №2')    
    } else if(cell02.innerHTML==='O' && cell11.innerHTML==='O' && cell20.innerHTML==='O'){
        alert('Победил игрок №2')    
    };
}

document.querySelector('.field').addEventListener('click', onFieldClick);


//Задачи
// function min(a, b){
//     return a < b ? a : b;
// }

// let a = prompt('a?', );
// let b = prompt('b?', );

// let result = min(a, b);

// alert(result);