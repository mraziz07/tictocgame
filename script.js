let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.winnerMsge');
let msg = document.querySelector('#msg');
let newGame = document.querySelector('#new-btn');
let resetGame = document.querySelector('#reset-btn')

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;// Same box disabled after one tapping;

        checkWinner();
    })
})

const checkWinner = () => {
    for(pattern of winPatterns) {
        posVal1 = boxes[pattern[0]].innerText;
        posVal2 = boxes[pattern[1]].innerText;
        posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != '' && posVal2 != '' && posVal3 != '') {
            if(posVal1 === posVal2 && posVal2 === posVal3) {
                console.log('winner', posVal1);
                disableboxes(); //disbling boxes after winning game
                showWinner(); //showing winning mssge;
            }
        }
    } 

} 

//disabling boxes on winning game;
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

//function for enabling boxes;
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

//function for showing winning message;
const showWinner = (winner) => {
    msg.innerText = `congratulations, winner is ${posVal1}`;
    msgContainer.classList.remove('hide');
}

//event for button - new game;
newGame.addEventListener('click', () => {
    enableboxes();
    msgContainer.classList.add('hide');
})

//event for button - Reset game;
resetGame.addEventListener('click', () => {
    enableboxes();
})


