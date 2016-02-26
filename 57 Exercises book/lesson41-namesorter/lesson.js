var model = {
    data:[],
    init:function()
    {
        model.data =[
            "Ling, Mai",
            "Johnson, Jim",
            "Zarnecki, Sabrina",
            "Jones, Chris",
            "Jones, Aaron",
            "Swift, Geoffrey",
            "Xiong, Fong"
    ]
    },
}

var view = {
    sortForm:"<button id='Sort'>Sort</button> "
}

var controller = {
    inputArea:$("#divInput"),
    init:function(){
       model.init()
       controller.inputArea.append(view.sortForm)
        $("#Sort").click(controller.sortClickHandler)
    },
    sortClickHandler:function()
    {
        model.data.sort().forEach(function(name)
        {
            $("#output").append(name + "<br>")
        })
    }
}


$(controller.init)