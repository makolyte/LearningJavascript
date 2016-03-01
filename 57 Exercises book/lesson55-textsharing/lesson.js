var model = {
    data:[],
    init:function() {
        model.data = ["Hello World", "Why hello there"]
    }
}

var view = {
    input:$("#divInput"),
    form:"Enter text <textarea style='width:500px;height:500px' id='usertext'></textarea><br>"
    + "<button id='save'>Save</button> "
}

var controller = {
    save:function(){
      model.data.push($("#usertext"))

    },
    init:function(){
       view.input.append(view.form)
       $("#save").click(controller.save)

    }
}


$(controller.init)