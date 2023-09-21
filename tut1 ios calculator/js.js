const num = document.querySelectorAll('.number')
const resultEl = document.querySelector('.output')
const signEl = document.querySelectorAll('.sign')
const negative = document.querySelector('.item.negative')
const divideEl = document.querySelector('.divide')
const percentEl = document.querySelector('.percent')
const addEl = document.querySelector('.add')
const subtractEl = document.querySelector('.subtract')
const multiplyEl = document.querySelector('.multiply')
const equalEl = document.querySelector('.equals')
const clearEl = document.querySelector('.clear')

let firstNumber = ""
let isFirstNumber = false
let secondNumber = ""
let isSecondNumber = false
let sign = ""
let result = "";


for(let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function(e){
        let atr = e.target.getAttribute('value')
        if(isFirstNumber === false) {
            getFirstNumber(atr)
        }
        if(isSecondNumber === false) {
            getSecondNumber(atr)
        }     
    })
}

function getFirstNumber(nu) {
    firstNumber +=  nu
    resultEl.innerHTML = firstNumber
    firstNumber = +firstNumber
}

function getSecondNumber(nu) {
    if(firstNumber != "" && sign != "") {
        secondNumber += nu
        resultEl.innerHTML = secondNumber
        secondNumber = +secondNumber
    }
}

function getSign() {
    for(let i = 0; i < signEl.length; i++) {
    signEl[i].addEventListener('click', function(e) {
        sign = e.target.getAttribute('value')
        isFirstNumber = true
    })
    }

}
getSign()

equalEl.addEventListener('click', function(){
    resultEl.textContent = ""
    if (sign === "/") {
        result = firstNumber / secondNumber
    } else if (sign === "x") {
        result = firstNumber * secondNumber
    } else if (sign === "-") {
        result = firstNumber - secondNumber
    } else if (sign === "+") {
        result = firstNumber + secondNumber
    }
    resultEl.textContent = result
    firstNumber = result
    secondNumber = ""
})

negative.addEventListener('click', function(){
    resultEl.textContent = ""
    if(firstNumber != "") {
        firstNumber = result
        result = -firstNumber
    }
    resultEl.textContent = result
})

percentEl.addEventListener('click', function(){
    resultEl.textContent = ""
    if(firstNumber != "") {
        firstNumber = result
        result = firstNumber / 100
    }
    resultEl.textContent = result
})

clearEl.addEventListener('click', function(){
    firstNumber = ""
    isFirstNumber = false
    secondNumber = ""
    isSecondNumber = false
    sign = ""
    result = ""
    resultEl.textContent = 0
})



// javascript