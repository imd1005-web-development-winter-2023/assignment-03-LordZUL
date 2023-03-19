//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
const btPopup = document.querySelector(".btnClick-popup");
const wrapper = document.querySelector(".wrapper");
const iconClose = document.querySelector(".ri-close-line");
const inputField = document.querySelector("#task-name");
const todoList = document.querySelector(".todoLists");
const todoListForm = document.querySelector(".add-todoList");
const pendingNum = document.querySelector(".pending-num");
const clearButton = document.querySelector(".clear-button");

//console.log(inputField,todoList,todoListForm,pendingNum,clearButton);

//register that enter key will enter data
function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  //console.log(tasks);
  pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if(allLists.length > 0){
    todoList.getElementsByClassName.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

btPopup.addEventListener("click", ()=>{
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", ()=>{
  //console.log("hello");
  wrapper.classList.remove("active-popup");
});


function addTodo(e) {
  // Stop browser default form submission
  e.preventDefault();
  let inputVal = inputField.value.trim(); //removes white space
  let liTag = `<li class="list pending" onclick = "handleStatus(this)">
          <input type="checkbox">
          <span class="task">${inputVal}</span>
          <i class="ri-delete-bin-5-line" onclick = "deleteTask(this)"></i>
        </li>`;
  const listItem = document.createElement("li");
  listItem.textContent = liTag;
  todoList.insertAdjacentHTML("beforeend", liTag);
  todoListForm.reset();
  allTasks();
}
todoListForm.addEventListener("submit", addTodo);
/*inputField.addEventListener("keyup",(e) =>{
  let inputVal = inputField.value.trim(); //removes white space 
  todoListForm.addEventListener("submit", addTodo);
  if ( e.key === "submit" && inputVal.length > 0) {
    
    /*let liTag = `<li class="list pending" onclick = "handleStatus(this)">
          <input type="checkbox">
          <span class="task">${inputVal}</span>
          <i class="ri-delete-bin-5-line" onclick = "deleteTask(this)"></i>
        </li>`;
   todoList.insertAdjacentHTML("beforeend", liTag);
   todoListForm.reset();
   allTasks();*/

  

function handleStatus(e){
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

function deleteTask(e){
  e.parentElement.remove();
  allTasks();
}
function clearList(e){
  todoList.innerHTML = "";
  allTasks();
}
clearButton.addEventListener("click", clearList);

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





