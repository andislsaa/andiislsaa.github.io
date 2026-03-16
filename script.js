let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

function renderTasks(){

taskList.innerHTML="";

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML=`

<div class="task-info">

<strong>${task.text}</strong>

<div class="deadline">
Deadline: ${task.deadline || "-"}
</div>

<select class="status" onchange="changeStatus(${index}, this.value)">
<option value="Belum Dikerjakan" ${task.status==="Belum Dikerjakan" ? "selected":""}>
Belum Dikerjakan
</option>

<option value="Sedang Dikerjakan" ${task.status==="Sedang Dikerjakan" ? "selected":""}>
Sedang Dikerjakan
</option>

<option value="Selesai" ${task.status==="Selesai" ? "selected":""}>
Selesai
</option>

</select>

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
status:"Belum Dikerjakan"
});

input.value="";
deadline.value="";

renderTasks();

}

function changeStatus(index,status){

tasks[index].status=status;

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

renderTasks();
