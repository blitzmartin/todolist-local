//SELECTORS VARIABLE
const todoInput = document.querySelector('.todo-input'); // the input field
const todoButton = document.querySelector('.todo-button'); // the + button
const todoList = document.querySelector('.todo-list');  // the list (ul) that's initially empty


//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);  //adds event listener to + button

//FUNCTIONS

function addTodo(event) {  //when button is clicked do this things

    //Prevent form from submitting (Chrome keeps refreshing by itself)
    event.preventDefault();

    if (todoInput.value.length > 0) { //checks that input is not empty

        //Create new ToDo div, it will contain new list item
        const todoDiv = document.createElement('div'); //create a new div
        todoDiv.classList.add('todo'); //style div

        //Create label that will contain input checkbox and span-text
        const itemLabel = document.createElement('label');
        itemLabel.setAttribute("for", "newItem");

        //Create input checkbox
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "newItem");  //give type attribute of checkbox to input
        itemLabel.appendChild(checkbox);

        //Create span to receive input text
        const spanText = document.createElement('span');
        spanText.innerHTML = todoInput.value;
        itemLabel.appendChild(spanText);

        //Create new Li element
        const listItem = document.createElement('li');  //create a new list item
        /* newTodo.innerHTML = todoInput.value;  */  //write in new li the input value
        listItem.classList.add('todo-item');
        listItem.appendChild(itemLabel);

        todoDiv.appendChild(listItem); //put the new li inside new div

        //Append new div to ToDo List
        todoList.appendChild(todoDiv);

        //Check what happens in console
        console.log(todoDiv);

        //Clear input field
        todoInput.value = "";
    }
    
}