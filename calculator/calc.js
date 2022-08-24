
// declare variables for the inputs, h2 and buttons

// all inputs:
const firstNumberInput = document.querySelector('#first-number')
const secondNumberInput = document.querySelector('#second-number')


const answerH2 = document.querySelector('h2')

// buttons
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const timesBtn = document.querySelector('#times')
const divisionBtn = document.querySelector('#division')

plusBtn.onclick = function(e){
    // what to happen when plusbtn is clicked on.
    // answerH2.innerHTML = parseInt(firstNumberInput.value) + parseInt(secondNumberInput.value)
    if(isNaN(parseInt(firstNumberInput.value)) || isNaN(parseInt(secondNumberInput.value))){
        answerH2.innerHTML = "Invalid values"
    }else{
        answerH2.innerHTML = parseInt(firstNumberInput.value) + parseInt(secondNumberInput.value)
    }
}

// minusbtn on click
minusBtn.onclick = function(e){
    // what to happen when minusbtn is clicked on.
    if(isNaN(parseInt(firstNumberInput.value)) || isNaN(parseInt(secondNumberInput.value))){
        answerH2.innerHTML = "Invalid values"
    }else{
        answerH2.innerHTML = parseInt(firstNumberInput.value) - parseInt(secondNumberInput.value)
    }
}

// timesbtn on click
timesBtn.onclick = function(e){
    // what to happen when minusbtn is clicked on.
    let firstValue = parseInt(firstNumberInput.value)
    let secondValue = parseInt(secondNumberInput.value)

    if(isNaN(firstValue) || isNaN(secondValue)){
        answerH2.innerHTML = "Invalid values"
    }else{
        answerH2.innerHTML = firstValue * secondValue
    }
}

// divisionbtn on click
divisionBtn.onclick = function(e){
    // what to happen when minusbtn is clicked on.
    answerH2.innerHTML = parseInt(firstNumberInput.value) / parseInt(secondNumberInput.value)
}

names = [1, 2, 3, 4]
