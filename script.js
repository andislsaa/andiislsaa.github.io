let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML=`

<div class="task-left">

<input type="checkbox" ${task.done ? "checked":""} onclick="toggleTask(${index})">

<div>

<div class="${task.done ? "completed":""}">
${task.text}
</div>

<div class="status ${task.done ? "done":"pending"}">
Status: ${task.done ? "Completed":"Pending"}
</div>

<div class="deadline">
Deadline: ${task.deadline || "-"}
</div>

</div>

</div>

<button class="delete" onclick="deleteTask(${index})">X</button>

`;

taskList.appendChild(li);

});

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

const input=document.getElementById("taskInput");
const deadline=document.getElementById("deadlineInput");

if(input.value==="") return;

tasks.push({
text:input.value,
deadline:deadline.value,
done:false
});

input.value="";
deadline.value="";

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
