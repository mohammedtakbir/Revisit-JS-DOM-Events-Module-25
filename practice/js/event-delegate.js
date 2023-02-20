
document.getElementById('add-btn').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.classList.add('item')
    li.innerText = `new item ${listContainer.children.length + 1}`;
    listContainer.appendChild(li);
})

document.getElementById('list-container').addEventListener('click', function (e) {
    e.target.parentNode.removeChild(e.target);
}) 