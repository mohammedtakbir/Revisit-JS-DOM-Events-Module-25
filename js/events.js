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
makePurple.onclick = function () {
    document.body.style.backgroundColor = 'purple'
}

//* option-5.1
document.getElementById('make-coral').addEventListener('click', () => {
    document.body.style.backgroundColor = 'coral';
})

//* option-5.2
document.getElementById('make-powderBlue').addEventListener('click', makePowderBlue);
function makePowderBlue() {
    document.body.style.backgroundColor = 'powderblue';
}

//* option-5.3
const makeLightGray = document.getElementById('make-lightgray');
makeLightGray.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightgray';
})






