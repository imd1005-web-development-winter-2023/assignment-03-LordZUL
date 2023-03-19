//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants

const inputField = document.querySelector("#task-name");
const todoList = document.querySelector(".todoLists");
const todoListForm = document.querySelector(".add-todoList");
const pendingNum = document.querySelector(".pending-num");
const clearButton = document.querySelector(".clear-button");

//console.log(inputField,todoList,todoListForm,pendingNum,clearButton);

//register that enter key will enter data
inputField.addEventListener("keyup",(e) =>{
  let inputVal = inputField.value.trim(); //removes white space 

  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="list">
          <input type="checkbox">
          <span class="task">${inputVal}</span>
          <i class="ri-delete-bin-5-line"></i>
        </li>`;
   todoList.insertAdjacentHTML("beforeend", liTag);
    console.log("Valid");

  }
})


// Variables

// DOM Elements

//
// Functions
//

// Add a heading to the app container


  // Create an h1 and add it to our app

//
// Inits & Event Listeners
//





