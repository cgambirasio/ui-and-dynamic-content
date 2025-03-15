let inputField = document.getElementById('itemInput');
let addButton = document.getElementById('addItemButton');
let itemList = document.getElementById('itemList');
let feedback = document.querySelector('.feedbackmsg');

function addItem() {
    
    let listItem = document.createElement('li');
    
    if (inputField.value.trim() !== '') {
       
        listItem.textContent = inputField.value;
        itemList.appendChild(listItem);
        feedback.textContent = '';
        inputField.value = '';
        inputField.focus();
        
    } else {
        feedback.textContent = 'Please enter an item';
    }
}

addButton.addEventListener('click', addItem);