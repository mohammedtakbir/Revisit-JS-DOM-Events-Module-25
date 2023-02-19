// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     console.log('clicked')
// })

const h1 = document.querySelector('.h1');

//* option-02
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//* option-03
const findMakeGreen = document.getElementById('make-green');
findMakeGreen.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green'
};

//* option-04
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function(){
    document.body.style.backgroundColor = 'purple'
}