document.getElementById('item-2').addEventListener('click', (e) =>{
    console.log('item-2 first clicked')
    e.stopImmediatePropagation()
})
document.getElementById('item-2').addEventListener('click', (e) =>{
    console.log('item-2 second clicked')
})
document.getElementById('item-2').addEventListener('click', (e) =>{
    console.log('item-2 third clicked')
})

document.getElementById('ul').addEventListener('click', (e) =>{
    console.log('ul clicked')
    // e.stopPropagation()
})
document.getElementById('section').addEventListener('click', (e) =>{
    console.log('section item-2 clicked')
})
document.getElementById('body').addEventListener('click', (e) =>{
    console.log('body clicked');
})