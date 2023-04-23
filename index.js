let player = 0;
let playerX = 0;
let playerO = 0;
setup()


function setup() {
    for (let i = 0; i < document.getElementsByClassName("square").length; i++) {
        const element = document.getElementsByClassName("square")[i];
        element.innerHTML = ""
        element.addEventListener("click", markSquares, false);
    }

    // document.addEventListener("keypress", (event) => {
    //     nextTrun()
    // });

}


function getSquares() {
    const squares = document.getElementsByClassName("square");
    const output = [];
    for (let i = 0; i < squares.length; i++) {
        const element = squares[i];
        output.push(element.innerHTML);
    }
    return output;
}

function checkRows() {
    const array = getSquares();
    temp = 0
    for (let i = 0; i < 3; i++) {
        if (array[temp] === array[1 + temp] && array[1 + temp] === array[2 + temp] && array[temp] != "") {
            return array[i + temp];
        }
        temp = temp + 3;
    }
    return -1;
}

function checkColumns() {
    const array = getSquares();
    temp = 0
    for (let i = 0; i < 3; i++) {
        if (array[i] === array[3 + i] && array[3 + i] === array[6 + i] && array[i] != "") {
            return array[i];
        }
        temp = temp + 3;
    }
    return -1;
}

function checkDiagonal() {
    const array = getSquares();
    if (array[0] === array[4] && array[4] === array[8] && array[4] != "") {
        return array[4];
    }
    if (array[2] === array[4] && array[4] === array[6] && array[4] != "") {
        return array[4];
    }
    return -1;
}

function isWon() {
    isWonPlayer = -1
    if (checkDiagonal() != -1) {
        isWonPlayer = checkDiagonal();
    }
    if (checkColumns() != -1) {
        isWonPlayer = checkColumns();
    }
    if (checkRows() != -1) {
        isWonPlayer = checkRows();
    }
    return isWonPlayer;
}

function isDone() {
    const array = getSquares();
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            return false;
        }
    }
    return true;
}

function markSquares(evt) {
    if (player == 0) {
        evt.target.innerHTML = "X"
        nextTrun()
    }
    else {
        evt.target.innerHTML = "O"
        nextTrun()
    }
}

function nextTrun() {
    if (isDone() || isWon() != -1) {
        if (isWon() === "X") {
            playerX++;
            document.getElementById("score-x").innerHTML = "Player X <div>" + playerX + "</dvi>"
        }
        if (isWon() === "O") {
            playerO++;
            document.getElementById("score-o").innerHTML = "Player O <div>" + playerO + "</dvi>"
        }
        alert("The winner is " + isWon())
        setup()
    }
    if (player == 0) {
        document.getElementById("turn-label").innerHTML = " O's Turn ";
    }
    else {
        document.getElementById("turn-label").innerHTML = " X's Turn ";
    }
    player = (player + 1) % 2
}

