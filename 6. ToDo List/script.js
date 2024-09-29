const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addToDoBtn = document.getElementById("addToDoBtn");

addToDoBtn.addEventListener("click",()=>{
    const newToDotext = newToDoInput.value;

    if(newToDotext!==""){
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDotext;

        const deleteToDoBtn = document.createElement("button");
        deleteToDoBtn.innerText = "X";
        
        deleteToDoBtn.classList.add("delete-ToDo-btn");
        deleteToDoBtn.addEventListener("click",function(){
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteToDoBtn);
        todoList.appendChild(newToDoItem);

        newToDoInput.value="";
    }
});