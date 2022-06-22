const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶어
    li.remove();
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    console.log(li);
    console.log(toDoList);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text:newToDo,
        id:Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit); 

// function sayHello(item){
//     console.log("this is turn of", item);
// }
// 밑 화살표 함수와 같은 표현임
const savedToDos = localStorage.getItem(TODOS_KEY)
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach(paintToDo);
}
