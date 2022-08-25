const authCredentials = {
    username: 'bello', 
    password: '12345678'
}


const loginForm = document.querySelector('form')
loginForm.onsubmit = (e)=>{
    e.preventDefault(true)
    let enteredUsername = document.querySelector('input#username').value
    let enteredPassword = document.querySelector('input#password').value
    const errorElement = document.querySelector('small')

    enteredUsername = enteredUsername.toLowerCase()
    
    const {username, password} = authCredentials

    console.log(username, password)
    if(enteredUsername === username && enteredPassword === password){
        console.log('correct credentials')
        errorElement.innerText = ''
    }
    else{
        console.log('Invalid login credentials')
        errorElement.innerText = 'Username or password is not correct'
    }
}