document.getElementById('input-field').addEventListener('keyup', function(e){
    const deleteBtn = document.getElementById('delete-btn');
    if(e.target.value === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }else{
        deleteBtn.setAttribute('disabled', true)
    }
})
document.getElementById('delete-btn').addEventListener('click', () => {
    document.getElementById('input-field').value = ''
    alert('delete successfully')
})
