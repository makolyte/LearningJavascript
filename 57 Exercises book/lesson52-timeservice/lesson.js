

var view = {
    searchForm: "<button id='btnDo'>Get time</button> "
}

var controller = {
    do:function() {
        $("#output").append(new Date())
},
    inputArea:$("#divInput"),
    init:function(){
        controller.inputArea.append(view.searchForm)
        $("#btnDo").click(controller.do)

    }
}


$(controller.init)