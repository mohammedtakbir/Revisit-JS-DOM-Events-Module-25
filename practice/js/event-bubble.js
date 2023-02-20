document.getElementById('item-2').addEventListener('click', (e) => {
    console.log('item-2 clicked');
})
document.getElementById('ul').addEventListener('click', (e) => {
    console.log('ul clicked')
    // e.stopPropagation();
})
document.getElementById('section').addEventListener('click', (e) => {
    console.log('section clicked')
})
document.getElementById('body').addEventListener('click', (e) => {
    console.log('body clicked')
})