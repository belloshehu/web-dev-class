const name = document.querySelector('#name')
const price = document.querySelector('#price')
const description = document.querySelector('#description')
const image = document.querySelector('#image')

const form = document.querySelector('form')

const imagePreview = document.querySelector('img#preview')
// onchange event for inputs
// function handleChange(e){
//     console.log('file is uploaded')
//     console.log(e.target.id)
//     console.log(e.target.name)
// }
// image.onchange = handleChange
image.onchange = function(e){
    const src = URL.createObjectURL(e.target.files[0])
    imagePreview.src = src;
}
form.onsubmit = (e)=>{
    e.preventDefault(true)
    console.log(image.files)
    const src = URL.createObjectURL(image.files[0])
    console.log({
        name: name.value,
        price: price.value,
        description: description.value,
        image: src
    })
}

