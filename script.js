let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML=`
<span onclick="toggleTask(${index})" class="${task.done ? 'completed':''}">
${task.text}
</span>

<button class="delete" onclick="deleteTask(${index})">X</button>
`;

taskList.appendChild(li);

});

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

const input=document.getElementById("taskInput");

if(input.value==="") return;

tasks.push({
text:input.value,
done:false
});

input.value="";

renderTasks();

}

function toggleTask(index){

tasks[index].done=!tasks[index].done;

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

renderTasks();
