// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('focus event')
// })
// document.getElementById('text-field').addEventListener('blur', function(){
//     console.log('blur event')
// })
document.getElementById('events-btn').addEventListener('mousemove', function(){
    // console.log('mousedown event')
    // console.log('mouseEnter event')
    console.log('mouse move event')
})

document.getElementById('text-field').addEventListener('keyup', function(e){
    // console.log('keyup event')
    console.log(e.target.value)
})

document.getElementById('text-field').addEventListener('keydown', function(e){
    // console.log('keydown event')
    // console.log(e.target.value)
})

document.getElementById('text-field').addEventListener('keypress', function(e){
    // console.log('keypress event')
    // console.log(e.target.value)
})