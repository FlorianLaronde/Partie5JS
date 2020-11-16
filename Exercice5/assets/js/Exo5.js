let btnPink = document.querySelector('#pink');
let btnBlue = document.querySelector('#blue');
let btnPurple = document.querySelector('#purple');
let btnBold = document.querySelector('#bold');
let btnItalic = document.querySelector('#italic')
let content = document.querySelector('p')

btnPink.addEventListener('click', () => content.style.backgroundColor = '#DF3EE5');
btnBlue.addEventListener('click', () =>content.style.backgroundColor = '#002EFF' );
btnPurple.addEventListener('click', () => content.style.backgroundColor = '#6200DC' );
btnBold.addEventListener('click', () => content.style.fontWeight = '900' );
btnItalic.addEventListener('click', () => content.style.fontStyle = 'italic' );




// let btnPink = document.querySelector('#pink');
// let btnBlue = document.querySelector('#blue');
// let btnPurple = document.querySelector('#purple');
// let btnBold = document.querySelector('#bold');
// let btnItalic = document.querySelector('#italic');

// btnPink.addEventListener('click', () => btnPink.style.backgroundColor = '#DF3EE5');
// btnBlue.addEventListener('click', () =>btnBlue.style.backgroundColor = '#002EFF' );
// btnPurple.addEventListener('click', () => btnPurple.style.backgroundColor = '#6200DC' );
// btnBold.addEventListener('click', () => btnBold.style.fontWeight = '900' );
// btnItalic.addEventListener('click', () => btnItalic.style.fontStyle = 'italic' );