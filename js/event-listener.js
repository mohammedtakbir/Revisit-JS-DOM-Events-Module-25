function handleOnclick() {
    document.getElementById('text-status').innerText = 'Text changed';
}

//* option-02
document.getElementById('handle-event-listener').addEventListener('click', () => {
    document.getElementById('text-status').innerText = 'Text changed by addEventListener'
})

//* update text using addEventListener
document.getElementById('update-btn').addEventListener('click', function () {
    const textField = document.getElementById('text-field');
    const inputField = document.getElementById('input-field');
    const inputFieldText = inputField.value;
    if(inputFieldText === ''){
        alert('Please write something');
        return
    }
    textField.innerText = inputFieldText;
    inputField.value = '';
})

