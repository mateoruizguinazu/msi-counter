let bluePoints = document.getElementById("blue-points")
let redPoints = document.getElementById("red-points")

let countBlue = 0
let countRed = 0


// BLUE
function btnoneblue() {
    countBlue += 1
    bluePoints.textContent = countBlue
}

function btntwoblue() {
    countBlue += 2
    bluePoints.textContent = countBlue
}

function btnthreeblue() {
    countBlue += 3
    bluePoints.textContent = countBlue
}

function btnfourblue() {
    countBlue += 4
    bluePoints.textContent = countBlue
}

function btnfiveblue() {
    countBlue += 5
    bluePoints.textContent = countBlue
}
// RED
function btnonered() {
    countRed += 1
    redPoints.textContent = countRed
}

function btntwored() {
    countRed += 2
    redPoints.textContent = countRed
}

function btnthreered() {
    countRed += 3
    redPoints.textContent = countRed
}

function btnfourred() {
    countRed += 4
    redPoints.textContent = countRed
}

function btnfivered() {
    countRed += 5
    redPoints.textContent = countRed
}

function reset() {
    countRed = 0
    countBlue = 0
    bluePoints.textContent = countBlue
    redPoints.textContent = countRed
}