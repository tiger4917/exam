const inputPassword = document.querySelector('.password');
const inputRePassword = document.querySelector('.re-type-password');
inputRePassword.addEventListener('input', function (e) {
    console.log(inputPassword.value);
    console.log(inputRePassword.value);
    if (inputPassword.value === inputRePassword.value){
        inputPassword.classList.add('success-password');
        inputRePassword.classList.add('success-password');
        inputPassword.classList.remove('error-password');
        inputRePassword.classList.remove('error-password');
    }
    else{
        inputPassword.classList.add('error-password');
        inputRePassword.classList.add('error-password');
        inputPassword.classList.remove('success-password');
        inputRePassword.classList.remove('success-password');
    }
})