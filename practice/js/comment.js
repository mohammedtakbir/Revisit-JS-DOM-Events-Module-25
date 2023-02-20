document.getElementById('comment-btn').addEventListener('click', function(){
    const comments = document.getElementById('comments');
    const p = document.createElement('p');
    const textField = document.getElementById('text-field');
    const comment = textField.value;
    if(comment === ''){
        alert('Please write your comment.')
        return;
    }
    p.innerText= comment;
    comments.appendChild(p)
    textField.value = '';
})