//SELECTORS VARIABLE

const todoInput = document.querySelector('.todo-input'); // the input field
const todoButton = document.querySelector('.todo-button'); // the + button
const todoList = document.querySelector('.todo-list');  // the list (ul) that's initially empty
const itemBtnAll = document.querySelectorAll('.listBtn');


//EVENT LISTENERS

todoButton.addEventListener('click', addTodo);  //adds event listener to + button and executes function



//FUNCTIONS

function addTodo(event) {  //when button is clicked do this things

    //Prevent form from submitting (Chrome keeps refreshing by itself)
    event.preventDefault();

    if (todoInput.value.length > 0) {       // the function only happens if input is not empty

        //Create input checkbox
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");  //new attribute type=checkbox inside input tag
        checkbox.setAttribute("id", "newItem");  //new attribute id=newItem inside input tag

        //Create span to receive input text
        const spanText = document.createElement('span');
        spanText.innerHTML = todoInput.value;

        //Create label that will contain checkbox and span-text
        const itemLabel = document.createElement('label');
        itemLabel.setAttribute("for", "newItem");  //new attribute for=newItem inside label tag
        
        const itemBtn = document.createElement('i');
        itemBtn.setAttribute("class","fa-solid fa-trash-can");
        itemBtn.setAttribute("id","itemBtn");

        itemLabel.appendChild(checkbox);  //append input checkbox to label
        itemLabel.appendChild(spanText); //append span with text to label (after checkbox)
        itemLabel.appendChild(itemBtn);

        //Create new Li element
        const listItem = document.createElement('li');  //create a new list item
        listItem.classList.add('todo-item');
        listItem.appendChild(itemLabel); //put label inside list item

        //Create new ToDo div, it will contain a new list item
        const listDiv = document.createElement('div'); //create a new div
        listDiv.classList.add('todo'); //style div   
        listDiv.appendChild(listItem);  //Put the new li inside new div

        //Put the div inside the big unordered list container
        todoList.appendChild(listDiv);

        //Clear input field
        todoInput.value = "";

        itemBtn.addEventListener('click', supressTask);

    }


}

function supressTask(event) {
    this.parentElement.parentElement.parentElement.remove();
}