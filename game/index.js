const pointer = document.querySelector('#pointer')
const playBtn = document.querySelector('button#play')
// let transformValue = 2000
let itemHeight = 80; // image-wrapper + gaps

const h1 = document.querySelector('article.image-wrapper h1')

// image wrapper items
let imageWrappers = document.querySelectorAll('.image-wrapper')

// score h1
const scoreH1 = document.querySelector('aside #score')

const selectionInput = document.querySelector('aside input#selection')

// display h2 
const displayH2 = document.querySelectorAll('aside #display-wrapper h2')

// modal
const modal = document.querySelector('div.modal')

// itmes wrapper
const itemsWrapper = document.querySelector('div#items')

// get height of the item wrapper:
let  height = itemsWrapper.getBoundingClientRect().height
let imageWrapperHeight = (height / imageWrappers.length);

//score
let score = 0
let maxTrial = 3
let trial = 0
let numberOfItems = imageWrappers.length;

function translateY(count = 1){
    // TODO: 
    // MOdifiy the code such that pointer points at the center of a random item
    // set the y position of pointer to the y position of the random item
    
    // move pointer to the bottom
    pointer.style.transform = `translateY(${height - 50}px)`
    // transform: translateY(height);
    setTimeout(()=>{
        pointer.style.transform = `translateY(${
            (imageWrapperHeight * count) - ((imageWrapperHeight + 25) / 2)
        }px)`
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
        let count = Math.floor((Math.random() * numberOfItems)+1)
        translateY(count)
        let selection = selectionInput.value
        displayH2[1].innerHTML = `Pointer stopped at ${count}`
        
        if(count === parseInt(selection)){
            score = score + 1
            scoreH1.innerHTML = score
            trial = trial + 1
            
            // change bakground color to grey and back to white
            imageWrappers[count - 1].style.backgroundColor = 'green'
            setTimeout(()=>{
                imageWrappers[count - 1].style.backgroundColor = 'white'

                // remove the highlighted item
                itemsWrapper.removeChild(imageWrappers[count - 1])
                const  numberH1s = document.querySelectorAll('.image-wrapper h1');
                numberH1s.forEach((numberH1, index) => {
                    numberH1.innerHTML = index + 1;
                });
                console.log(numberH1s)

                // update the imageWrappers variable
                imageWrappers = document.querySelectorAll('.image-wrapper')
                // get the current number of imageWrapper items
                numberOfItems = imageWrappers.length;

                // update the height of the items Wrapper
                height = itemsWrapper.getBoundingClientRect().height
                imageWrapperHeight = (height / imageWrappers.length);


            }, 1000)


        }else{
            score = score - 1
            trial = trial - 1
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