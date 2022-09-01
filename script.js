const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');



function checkPass(){

    if(password.value != passwordConfirm.value)
    {
        alert("incorrect");

    }
}

