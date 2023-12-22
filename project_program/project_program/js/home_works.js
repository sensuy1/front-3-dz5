// HOMEWORK 1 PART 1
// const gmailInput = document.querySelector('#gmail_input')
// const gmailButton = document.querySelector('#gmail_button')
// const gmailResult = document.querySelector('#gmail_result')
//
// const regExpGmail = /^\w+@gmail.com$/
//
// gmailButton.onclick = () => {
//     if(regExpGmail.test(gmailInput.value)){
//         gmailResult.innerHTML = "OK"
//         gmailResult.style.color = "green"
//     }else{
//         gmailResult.innerHTML = "NOT OK"
//         gmailResult.style.color = "red"
//     }
// }



// HOMEWORK 1 PART 2
// const parentBlock = document.querySelector('.parent_block')
// const childBlock = document.querySelector('.child_block')
// let position = 0
// const contain = () => {
//     position++
//
//     const parentWitch = parentBlock.clientWidth
//     const childWitch = childBlock.clientWidth
//
//     if (position + childWitch < parentWitch) {
//         childBlock.style.left = position + 'px'
//         setTimeout(contain, 10)
//     }
// }
// contain()



// HOMEWORK 2 PART 1
const childBlock = document.querySelector('.child_block')
const moveSpeedChildBlock = 0.1
const parentBlockWith = 450
const zero = 0
let positionX = 0
let positionY = 0
const runBlock = () => {

    if (positionX < parentBlockWith && positionY === zero) {
        positionX++
        childBlock.style.left = `${positionX}px`
    }else if (positionX >= parentBlockWith && positionY < parentBlockWith) {
        positionY++
        childBlock.style.top = `${positionY}px`
    }else if (positionX > zero && positionY === parentBlockWith ) {
        positionX--
        childBlock.style.left = `${positionX}px`
    }else if (positionY > zero && positionX <= parentBlockWith) {
        positionY--
        childBlock.style.top = `${positionY}px`
    }

    setTimeout(runBlock, moveSpeedChildBlock)
}
runBlock()



// HOMEWORK 2 PART 2
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const second = document.querySelector('#secondsS')
let positionPart2 = 0
let intervalID

startButton.onclick = () => {
    clearInterval(intervalID)
    intervalID = setInterval( () => {
        positionPart2++
        second.innerText = positionPart2
    }, 1000)
}

stopButton.onclick = () => {
    clearInterval(intervalID)
}

resetButton.onclick = () => {
    clearInterval(intervalID)
    second.innerText = positionPart2 = 0
}








