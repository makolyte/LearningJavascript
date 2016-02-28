var model = {
    init:function()
    {
        model.words = []
        model.wordCounts =[]

    },
    words:[],
    wordCounts:[],
    incrementWordCount:function(word){
        var index = $.inArray(word, model.words)
        if (index == -1) {
            index = model.words.push(word) - 1
            model.wordCounts.push({word:word, count:0})
        }
        model.wordCounts[index].count++
    }
}

var view = {
    input:"<textarea style='width:500px; height:500px' id='words' placeholder='paste words here to count'></textarea><br>"
    + "<button id='do'>Count words</button>",
    resetOutput:function(){
        $("#output").text('')
    },
    writeOutput:function(outputArray){$("#output").append(outputArray.join("<br>"))}
}

var controller = {
    inputArea:$("#divInput"),
    init:function(){
       controller.inputArea.append(view.input)
        $("#do").click(controller.doClickHandler)

    },
    doClickHandler:function(){
        model.init()
        view.resetOutput()
        var input = $("#words").val()
        input.split(" ").forEach(function(word){
            model.incrementWordCount(word)
        }
        )
        var output = []
        $.each(model.wordCounts, function(key, obj){
            output.push(obj.word + " count: " + obj.count)
        })
        view.writeOutput(output)
    }
}


$(controller.init)