const products = [
    {
        name: 'Cake bread',
        price: 1500,
        pictureUrl: './images/bread1.jpg', 
    },
    {
        name: 'Cake',
        price: 2300,
        pictureUrl: './images/conf3.jpg', 
    },
    {
        name: 'Bread',
        price: 500,
        pictureUrl: './images/bread3.jpg', 
    },
    {
        name: 'Cake bread',
        price: 1500,
        pictureUrl: './images/BREAD.jpg', 
    },
    {
        name: 'Cake bigger',
        price: 2300,
        pictureUrl: './images/conf-bread.jpg', 
    },
    {
        name: 'Bread softer',
        price: 500,
        pictureUrl: './images/bread4.jpg', 
    },
]
const productsContainer = document.querySelector('main')
// function to add product items to the DOM element container
const addProducts = function(productList){
    productList.forEach(product =>{
        productsToBeAdded = productsToBeAdded + `
            <article>
            <h2>${product.name}</h2>
            <h3>${product.price}</h3>
            <img 
                src="${product.pictureUrl}" 
                alt="" width="100%" height="200px"
            >
            </article>
        `    
    })
    productsContainer.innerHTML = productsToBeAdded
}
let productsToBeAdded = ''
addProducts(products)

// handle form submit
const form = document.querySelector('form')
form.onsubmit = (e)=>{
    e.preventDefault(true)
    let keyword = document.querySelector('input').value
    const filteredProducts = products.filter(product => product.name.toLowerCase() === keyword.toLowerCase()
    )
    
    if(filteredProducts.length !==0){
        productsContainer.innerHTML = '';
        productsToBeAdded = ''
        addProducts(filteredProducts)
    }else{
        productsContainer.innerHTML = `<h2 style='color: red;'>No product with name '${keyword} 'found!</h2>`
    }
}