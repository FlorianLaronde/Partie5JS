let form = document.getElementById('form');

form.addEventListener('focus', function(event) { 
    event.target.style.background = 'lightblue';
}, true );

form.addEventListener('blur', function(event) {
    event.target.style.background = '';
}, true);



// *****Correction(Laurent)******
// function border(myElement) {
//     myElement.style.outline ='black px solid';
// }

// function notborder(myElement) {
//     myElement.style.outline ='none';
// }

// Ne pas oublier onblur