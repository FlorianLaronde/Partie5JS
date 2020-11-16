const p = document.getElementsByTagName('p').item(0);  
window.addEventListener('scroll', function() {
        document.getElementsByTagName('p').item(0).style.fontSize = ((scrollY*0,001) + 1) + 'em';
});


// Change la taille du texte au bout de 500 pixels de scroll et revient à la normale au remontant le scroll
// const p = document.querySelector('p');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 500) {
//         p.classList.add('scroll');
//     } else {
//         p.classList.remove('scroll')
//     }
// });
