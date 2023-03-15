const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
 let result = 0
 let hitPosition

 function randomSquare()
 {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomPostion = squares[Math.floor(Math.random()* 9) ]
    randomPostion.classList.add('mole')
    hitPosition = randomPostion.id
    console.log(randomPostion)

 }

 squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
 })
 

 function moveMole(){
    let timerId = null
    timerId= setInterval(randomPostion, 500 )
 }
 moveMole()

//  randomSquare()