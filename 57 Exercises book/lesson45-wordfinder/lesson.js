var model = {
    wordSubs:{}
}

var view = {
    input:"Text to clean <textarea id='textToClean' placeholder='Paste or type a block of words to clean up'></textarea><br>"
    + "<button id='Clean'>Clean</button> "
}

var controller = {
    inputArea:$("#divInput"),
    init:function(){
       model.wordSubs["utilize"] = "use";
        controller.inputArea.append(view.input)
        $("#Clean").click(controller.cleanClickHandler)
    },
    cleanClickHandler:function(){
        var textToClean = $("#textToClean").val()
        $.each(model.wordSubs, function(k, v){
            console.log("in each")
            textToClean = textToClean.replace(new RegExp(k, "g"), v)
        })

        $("#textToClean").val(textToClean)

    }
}


$(controller.init)