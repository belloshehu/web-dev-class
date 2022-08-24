let form = document.querySelector('form')
let audioElement = document.querySelector('audio')
let wordElement = document.querySelector('#word')
let phonetic = document.querySelector('#phonetic')
let explanationElement = document.querySelector('#explanation')

form.onsubmit = (e)=>{
    e.preventDefault(true)
    let userWord = document.querySelector('#user-word').value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
    .then((jsonResponse)=>{
        return jsonResponse.json();
    })
    .then((data)=>{
        console.log(data)
        data.forEach(word => {
            wordElement.innerHTML = word.word
            phonetic.innerHTML = word.phonetic
            explanationElement.innerHTML = word.meaning
            word.phonetics.forEach(phonetic =>{
                if(phonetic.audio){
                    // set audio attrs
                    audioElement.setAttribute('src', phonetic.audio)
                    console.log(phonetic.audio)
                }
            })
        });
    })
    .catch((err)=>{console.log(err)})
}

const timesIcon = document.querySelector('.times')
const aside = document.querySelector('aside')

timesIcon.onclick = (e)=>{
    aside.style.transform = 'translateY(-200%)'
}

const recentBtn = document.querySelector('button.fas-bars')
recentBtn.onclick = (e)=>{
    aside.style.transform = 'translateY(0%)'
}