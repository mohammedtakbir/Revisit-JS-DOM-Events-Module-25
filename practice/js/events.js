//* option-2
function makeLightcoral(){
    document.body.style.backgroundColor = 'lightcoral';
}

//* option-3.1
const makeLightSeaGreen = document.getElementById('makelightseagreen');
makeLightSeaGreen.onclick = function(){
    document.body.style.backgroundColor = 'lightseagreen';
};

//* option-3.2
const makePowderBlue = document.getElementById('makePowderBlue');
makePowderBlue.onclick = makePowder;
function makePowder(){
    document.body.style.background = 'powderblue'
}

//* option-4.1
const makeLightBlue = document.getElementById('make-lightblue');
makeLightBlue.addEventListener('click', lightBlue);
function lightBlue(){
    document.body.style.backgroundColor = 'lightblue'
}

//* option-4.2
document.getElementById('make-lightsteelblue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightsteelblue'
})