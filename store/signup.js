const authCredentials = {}
// handle user registration

const loginForm = document.querySelector('form')
loginForm.onsubmit = (e)=>{
    e.preventDefault(true)

    let enteredUsername = document.querySelector('input#username').value
    let enteredPassword = document.querySelector('input#password').value
    let enteredRepeatPassword = document.querySelector('input#r-password').value

    const errorElement = document.querySelector('small')
    errorElement.style.color = 'red'

    enteredUsername = enteredUsername.toLowerCase()

    if(enteredPassword === enteredRepeatPassword){
        authCredentials.username = enteredUsername.toLowerCase();
        authCredentials.password = enteredPassword
        errorElement.style.color = 'green'
        errorElement.innerText = `Congratulations!!`
    }else{
        errorElement.innerText = `Passwords did not match`
    }
}
