// Relie le button à l'id du html
let button = document.getElementById('button');
// lancer le début de la fonction (démarrage)
button.onclick = function(e) {
    e.preventDefault();
    let password = document.getElementById('password');
    let confirmpassword = document.getElementById('confirmpassword');
    if ( password.value === confirmpassword.value) {
       password.style.borderColor = 'green';
       confirmpassword.style.borderColor = 'green';
    } else {
        password.style.borderColor = 'red';
        confirmpassword.style.borderColor = 'red';
    }
}
