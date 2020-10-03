const myTodos = [];

const addBtn = document.querySelector(".btn");
const myPage = document.querySelector("#myTODO")

addBtn.addEventListener("click", addTodo);
const myInput2 = document.querySelector("#myInput");
myInput2.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.querySelector(".btn").click();
    }
  });

function addTodo() {
    const myInput = document.querySelector("#myInput").value;
    
    const myObject = {
        id: `Item${myTodos.length + 1}`,
        todoText: myInput,
        isDone: false,
        isRemove: false,
    };
    
    myTodos.push(myObject);
    console.log(myTodos);
    displayMyTodos();
    
};

function checkedItem(todoId) {
    const selectedTodoIndex = myTodos.findIndex((item) => item.id == todoId);
    // todoList[selectedTodoIndex].isDone = true;
    myTodos[selectedTodoIndex].isDone = (myTodos[selectedTodoIndex].isDone == false) ? true : false;
    displayMyTodos();
}

function removedItem(removedId) {
    const selectedTodoIndex2 = myTodos.findIndex((item) => item.id == removedId);
    myTodos[selectedTodoIndex2].isRemove = true
    displayMyTodos();
}

function displayMyTodos(){

    myPage.innerHTML = "";
    document.querySelector("#myInput").value = "";

    myTodos.forEach((item)=> {
        
        const myCreatedLiElement = document.createElement("li");
        const myCreatedButtonElement = document.createElement("button");
        myCreatedLiElement.innerText = item.todoText;
        myCreatedLiElement.setAttribute("data-id", item.id);
        myCreatedButtonElement.innerText = "x";
        myCreatedButtonElement.setAttribute("data-id", item.id);

        if (item.isDone) {
            myCreatedLiElement.classList.add("checked");
          }

          if (item.isRemove) {
            myCreatedLiElement.classList.add("removed");
          }
      

        myCreatedLiElement.addEventListener("click", function (e) {
            const selectedLiId = e.target.getAttribute("data-id");
            checkedItem(selectedLiId);
          });

          myCreatedButtonElement.addEventListener("click", function (e) {
            const selectedLiId2 = e.target.getAttribute("data-id");
            removedItem(selectedLiId2);
          });
        myCreatedLiElement.appendChild(myCreatedButtonElement);
        myPage.appendChild(myCreatedLiElement);
    });
}
