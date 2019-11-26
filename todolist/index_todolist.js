// document.getElementById("addBtn").addEventListener('click', addItem);

// function addItem() {
//     const entry = document.querySelector('input').value;
//     const listItems = document.getElementById("listItems");
//     const newItem = document.createElement('li');
//     const addEntry = document.createTextNode(entry);



//     newItem.appendChild(addEntry);
//     listItems.appendChild(newItem);
//     document.querySelector('input').value = "";
// };


let entry = document.querySelector('input').value;
document.getElementById("addBtn").addEventListener('click', addItem);

function addItem() {
    let entry = document.querySelector('input').value;
    if (entry !== '') {
        listItems.innerHTML += '<li>' + '<input id="checkboxIcon" class="checkBox" type="checkbox" value="entry">' + ' <i class="fas fa-times"></i>  </li>';
        document.querySelector('input').value = "";
    }
};