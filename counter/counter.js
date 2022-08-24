const h2 = document.querySelector('h2')

// limit input
const limitInput = document.querySelector('#limit')
// step input
const stepInput = document.querySelector('#step')

const welcome = document.querySelector('article')
let counter = 0;
let limit = 0;

function sayWelcome(){
    welcome.style.transform = 'translateY(-450%)'
}

window.onload = (e)=>{
    setTimeout(sayWelcome, 1000)
    let savedCount = window.localStorage.getItem('counter')
    let savedLimit = window.localStorage.getItem('limit')
    let savedStep = window.localStorage.getItem('step')

    // check if counter, limit and step values were saved
    if(savedCount && savedLimit && savedStep){
        counter = JSON.parse(savedCount)
        limitInput.value = JSON.parse(savedLimit)
        stepInput.value = JSON.parse(savedStep)
        h2.innerText = counter
    }else{
        counter = 0

    }
}

// buttons
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
// reset 
let resetBtn = document.querySelector('#reset')

resetBtn.onclick = (e)=>{
    counter = 0;
    h2.innerText = 0;
    limit = 1;
    limitInput.value = 1;
}

// save button 
const saveBtn = document.querySelector('#save')
saveBtn.onclick = (e)=>{
    const limitValue = parseInt(limitInput.value);
    const stepValue = parseInt(stepInput.value);
    window.localStorage.setItem('counter',  JSON.stringify(counter))
    window.localStorage.setItem('limit',  JSON.stringify(limitValue))
    window.localStorage.setItem('step', JSON.stringify(stepValue))
}

plusBtn.onclick = function(e){ // click event handler
    const limitValue = parseInt(limitInput.value)
    let stepValue = parseInt(stepInput.value)
    if(counter < limitValue && !isNaN(limitValue)){
        counter = counter + stepValue; // counter++
        h2.innerHTML = counter
    }
}

minusBtn.onclick = function(e){
    let stepValue = parseInt(stepInput.value)
   if(counter > 0){
        counter = counter - stepValue
        h2.innerHTML = counter;
   }
}