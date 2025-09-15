let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true;

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if(turnO) {
            e.innerHTML = 'O';
            turnO = false;
        }
        else {
            e.innerHTML = 'X';
            turnO = true;
        }
        e.disabled = true;

    });
});

const checkWinner = () => {
    for(win of winPatterns) {
        if(boxes[win[0]].innerHTML === "O" && (boxes[win[0]].innerHTML === boxes[win[1]].innerHTML) && (boxes[win[0]].innerHTML === boxes[win[2]].innerHTML)) {
            console.log("Game is Over");
        }
        // if(win[0] == win[1] == win[2]) {
        //     console.log("Game is over");
        // }
    }
}