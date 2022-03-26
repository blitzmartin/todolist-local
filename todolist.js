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

    if (todoInput.value.length > 0) {       // the function only happens if input is not empty

        //Create label that will contain input checkbox and span-text
        const itemLabel = document.createElement('label');
        itemLabel.setAttribute("for", "newItem");  //new attribute for=newItem inside label tag

        //Create input checkbox
        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");  //new attribute type=checkbox inside input tag
        checkbox.setAttribute("id", "newItem");  //new attribute id=newItem inside input tag
        itemLabel.appendChild(checkbox);  //append input checkbox to label

        //Create span to receive input text
        const spanText = document.createElement('span');
        spanText.innerHTML = todoInput.value;
        itemLabel.appendChild(spanText); //append span with text to label (after checkbox)

        //Create new Li element
        const listItem = document.createElement('li');  //create a new list item
        listItem.classList.add('todo-item');
        listItem.appendChild(itemLabel); //put label inside list item

        //Create new ToDo div, it will contain a new list item
        const listDiv = document.createElement('div'); //create a new div
        listDiv.classList.add('todo'); //style div

        //Put the new li inside new div
        listDiv.appendChild(listItem);

        //Put the div inside the big unordered list container
        todoList.appendChild(listDiv);

        //Clear input field
        todoInput.value = "";
    }

}