document.getElementById('add-comment-btn').addEventListener('click', () => {
    const comments = document.getElementById('comments');
    const p = document.createElement('p');
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    if (inputText === '') {
        alert('Please add comment');
        return;
    }
    p.innerText = inputText;
    comments.appendChild(p);
    inputField.value = '';
}) 