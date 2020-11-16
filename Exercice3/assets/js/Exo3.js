let name = document.getElementById('Name');
name.addEventListener('input', validName ); 
    
let mail = document.getElementById('Mail');
mail.addEventListener('input', validMail );

let age = document.getElementById('Age');
age.addEventListener('input', validAge );


function validName() {
    let NameRegexp = new RegExp(/^[A-Za-z\é\è\ê]+$/);
    let ErrorName = document.getElementById('ErrorName');

    if (NameRegexp.test(name.value) == true) {
        ErrorName.textContent = 'Nom valide';
        ErrorName.style.color = 'green';
    } else {
        ErrorName.innerHTML ='Nom non valide';
        ErrorName.style.color = 'red';
    }
}

function validMail() {
    let MailRegexp = new RegExp(/^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$/);
    let ErrorMail = document.getElementById('ErrorMail');

    if (MailRegexp.test(mail.value) == true) {
        ErrorMail.textContent = 'Mail valide';
        ErrorMail.style.color = 'green';
    } else {
        ErrorMail.innerHTML ='Mail non valide';
        ErrorMail.style.color = 'red';
    }
}

function validAge() {
    let AgeRegexp = new RegExp(/^[0-9]{1,3}$/);
    let ErrorAge = document.getElementById('ErrorAge');

    if (AgeRegexp.test(age.value) == true) {
        ErrorAge.textContent = 'Age valide';
        ErrorAge.style.color = 'green';
    } else {
        ErrorAge.innerHTML ='Age non valide';
        ErrorAge.style.color = 'red';
    }
}

