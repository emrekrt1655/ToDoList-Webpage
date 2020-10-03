const myTodos = [];

class TodoList{
    constructor(myPageParam){
        this.myPage = myPageParam;
    }

    add(myInput){
        const myObject = {
            id: `Item${myTodos.length + 1}`,
            todoText: myInput,
            isDone: false,
            isRemove: false,
        }; 

        myTodos.push(myObject);
        this.display()
    };

    check(todoId) {
        const selectedTodoIndex = myTodos.findIndex((item) => item.id == todoId);
        // todoList[selectedTodoIndex].isDone = true;
        myTodos[selectedTodoIndex].isDone = (myTodos[selectedTodoIndex].isDone == false) ? true : false;
        this.display();
    };

    remove(removedId) {
        const selectedTodoIndex2 = myTodos.findIndex((item) => item.id == removedId);
        myTodos[selectedTodoIndex2].isRemove = true
        this.display();
    };

    display(){

        this.myPage.innerHTML = "";
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
                myTodoList.check(selectedLiId);
              });
    
              myCreatedButtonElement.addEventListener("click", function (e) {
                const selectedLiId2 = e.target.getAttribute("data-id");
                myTodoList.remove(selectedLiId2);
              });
            myCreatedLiElement.appendChild(myCreatedButtonElement);
            this.myPage.appendChild(myCreatedLiElement);
        });

};

};
const myPageUl = document.querySelector("#myTODO");
const myPageUl2 = document.querySelector("#myTODO2");

const myTodoList = new TodoList(myPageUl2);

const myInput2 = document.querySelector("#myInput");
myInput2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector(".btn").click();
    }
  });

document.querySelector(".btn").addEventListener("click", function(){

    const myInput = document.querySelector("#myInput").value;

    if(myInput === ''){
        return;
    }

    myTodoList.add(myInput);
});



