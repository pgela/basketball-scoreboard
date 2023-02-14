let board1 = document.getElementById("board1")
let board2 = document.getElementById("board2")

let homeScore = 0
let guestScore = 0

function home1() {
    homeScore += 1
    
    board1.textContent = homeScore
}

function home2() {
    homeScore += 2
    
    board1.textContent = homeScore
}

function home3() {
    homeScore += 3
    
    board1.textContent = homeScore
}

function guest1() {
    guestScore += 1
    
    board2.textContent = guestScore
}

function guest2() {
    guestScore += 2
    
    board2.textContent = guestScore
}

function guest3() {
    guestScore += 3
    
    board2.textContent = guestScore
}

function reset() {
    let finalScore = " " + homeScore + ":" + guestScore + "- "
    document.getElementById("save").innerText += finalScore   
    
    homeScore = 0
    guestScore = 0 
    board1.innerText = homeScore
    board2.innerText = guestScore
}