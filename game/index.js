const pointer = document.querySelector('#pointer')
const playBtn = document.querySelector('button#play')
let transformValue = 2000
let itemHeight = 80; // image-wrapper + gaps

const h1 = document.querySelector('article.image-wrapper h1')

// image wrapper items
const imageWrappers = document.querySelectorAll('.image-wrapper')

// score h1
const scoreH1 = document.querySelector('aside #score')

const selectionInput = document.querySelector('aside input#selection')

// display h2 
const displayH2 = document.querySelectorAll('aside #display-wrapper h2')

// modal
const modal = document.querySelector('div.modal')
//score
let score = 0
let maxTrial = 3
let trial = 0

function translateY(count = 1){
    pointer.style.transform = `translateY(${itemHeight * 8}px)`
    setTimeout(()=>{
        pointer.style.transform = `translateY(${itemHeight * (count)}px)`
    }, 1000)
}

function playGame(e){
    displayH2[0].innerHTML = `You selected ${selectionInput.value}`
    displayH2[1].innerHTML = ``
    translateY()
    let timer1 = setTimeout(()=>{
        translateY()
    }, 1500)
    let timer2 = setTimeout(()=>{
        clearTimeout(timer1)
        let count = Math.floor((Math.random()*8)+1)
        translateY(count)
        let selection = selectionInput.value
        displayH2[1].innerHTML = `Pointer stopped at ${count}`
        console.log(count, selection)
        if(count === parseInt(selection)){
            score = score + 1
            scoreH1.innerHTML = score
            console.log('score', score)
            
            // change bakground color to grey and back to white
            imageWrappers[count - 1].style.backgroundColor = 'grey'
            setTimeout(()=>{
                imageWrappers[count - 1].style.backgroundColor = 'white'
            }, 1000)
        }else{
            score = score - 1
            scoreH1.innerHTML = score

            // change bakground color to red and back to white
            imageWrappers[count - 1].style.backgroundColor = 'red'
            setTimeout(()=>{
                imageWrappers[count - 1].style.backgroundColor = 'white'
            }, 1000)
        }
        if(score < 0 && trial === maxTrial){
            score = 0;
            modal.style.visibility =  'visible'
            modal.children[1].innerHTML = `Won ${score} in ${trial} attempt!`
            modal.children[1].style.color = 'orange'
            
            setTimeout(()=>{
                modal.style.transform = 'rotate(360deg)'
                modal.style.visibility =  'hidden'
            
                // reset all variables
                displayH2[0].innerHTML = ''
                displayH2[1].innerHTML = ''
                score = 0
                trial = 0
                scoreH1.innerHTML = 0
            }, 3000)
        }
        clearTimeout(timer2)
    }, 2500)
    trial +=1
}

playBtn.onclick = playGame