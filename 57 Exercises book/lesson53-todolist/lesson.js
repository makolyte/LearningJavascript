var model = {
    data:{data:[]},
    init:function()
    {
        if(localStorage.getItem("tasks") === null)
        {
            localStorage.setItem("tasks", JSON.stringify(data))
        }
    },
    add:function(task)
    {
        var data = JSON.parse(localStorage.tasks);
        console.log("data " + data)
        return JSON.parse(localStorage.tasks).push(task)
    },
    getAll:function()
    {
        return JSON.parse(localStorage["tasks"])
    }
}

var view = {
    newTask:"Task<input type='text' id='task'><br>"
    + "<button id='add'>Add Task</button> ",
    input:$("#input"),
    output:$("#output"),
    taskList:"TASKS<br><ol id='tasklist'></ol>",
    taskItem:"<li id=''>$task</li>"
}

var controller = {
    appendTaskItemToList:function(index, task){
        var taskItem = $(view.taskItem.replace("$task", task));
            console.log("task item = " + taskItem)
            taskItem.attr("id", index)

          $("#tasklist").append(taskItem)
    },
    displayTasks:function(){

        $.each(model.getAll(), function(index, task)
        {
            controller.appendTaskItemToList(index, task)
        })



    },
    addTask:function(){
        var task = $("#task").val()
        controller.appendTaskItemToList(model.add(task), task);

    },
    init:function(){
        model.init()
       view.input.append(view.newTask)
        $("#output").append(view.taskList)
        $("#add").click(controller.addTask)
        controller.displayTasks()
    }
}


$(controller.init)