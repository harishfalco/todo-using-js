
let todoItems=[]
let id = 1;
const pressEvent = document.querySelector('.textfeild')
pressEvent.addEventListener('keydown',e =>{
    if(e.code == "Enter"){
        addTask(e);
    }
})


window.onclick = (e)=>{
    if(e.target.type === "checkbox"){
        if(e.target.checked){
             checkTask(e.target.id)
        }else{
            unCheckTask(e.target.id)
        }
    }
    else {
        if(e.target.tagName == "I"){
            deleteTask(e.target.id)
        }
    }
}


const checkTask = (id)=>{  
    todoItems.forEach(e => {
        if(e.id == id){
            e.isChecked = true;
            e.isCompleted = true;
        }
    })
    const element = document.getElementById(id)
    element.classList.add("stike-text")

    console.log(element);
}

const unCheckTask = (id)=>{
    todoItems.forEach(e => {
        if(e.id == id){
            e.isChecked = false;
            e.isCompleted = false;
        }
    })
    const element = document.getElementById(id)
    element.classList.remove("stike-text")
}

const deleteTask = (e)=>{
    todoItems = todoItems.filter(ele => ele.id!= e)
    displayTodoItems(todoItems)
}
const addTask = (e) =>{
    const task = e.target.value;
    if (task === '') {
        alert("You must write something!");
    }
    createTask(task);
    e.target.value=``;
}

const createTask = task =>{
    const todo = {
        task,
        isChecked:false,
        isCompleted:false,
        id:Date.now()
    }
    todoItems.push(todo);
    displayTodoItems(todoItems);
    updateLength(todoItems)
}

const clearCompletedTask = ()=>{
    todoItems = todoItems.filter(ele => ele.isCompleted != true)
    displayTodoItems(todoItems);
}

const completeAllTask = ()=>{
    todoItems.forEach(ele =>{
        checkTask(ele.id)
    })
}

const displayTodoItems = (arr) =>{
    if(arr == null){
        arr = todoItems
    }
    document.querySelector(".tasklist_ul").innerHTML = "";
    arr.forEach(element => {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
    <div class="task">
        <p id=${element.id}> <input type="checkbox" class="checkbox-round" id=${element.id}  /> ${element.task}  <i class="fa fa-remove del-icon" id=${element.id}></i> </p>
    </div>
    `;
    const tasklist = document.querySelector('.tasklist_ul');
    tasklist.appendChild(newTask)
    });
    updateLength(todoItems)
}





const updateLength = (todoItems)=>{
    const noOfTask = document.querySelector(".no-of-tasks");
    const length = todoItems.length
    noOfTask.innerHTML =  `${length} tasks`
}


const completedTask = ()=>{
    const arr = todoItems.filter(ele => ele.isCompleted==true)
    displayTodoItems(arr);
    updateLength(arr)
}

const unCompletedTask = ()=>{
    const arr  = todoItems.filter(ele => ele.isCompleted==false);
    displayTodoItems(arr);
    updateLength(arr)
}



