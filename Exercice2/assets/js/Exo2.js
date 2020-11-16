let button = document.getElementById('button');
button.onclick = function(e) {
    e.preventDefault();
    let password = document.getElementById('password');
    let confirmpassword = document.getElementById('confirmpassword');
    if ( password.value === confirmpassword.value) {
        password.classList.add('class');
        confirmpassword.classList.add('class');
    } else {
       password.classList.add('class2');
       confirmpassword.classList.add('class2');
    }
}
// remove