var model = {
    data:{}
}

var view = {
    output:$("#output"),
    input:$("#divInput"),
    searchForm:"Enter a city to get the weather for <input type='text' id='city'><br>"
    + "<button id='btnDo'>Get Weather</button> "
}

var controller = {
    getWeather:function(){

        $.ajax({
            url:"http://api.openweathermap.org/data/2.5/weather",
            data:{
                q:$("#city").val(),
                appid:"789131f035c1ebb9888b7e68e93b42a9"
            },
            success:controller.processData,
            error:controller.handleFail})

        //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=789131f035c1ebb9888b7e68e93b42a9", controller.processData).fail(controller.handleFail)


    },
    init:function(){
        view.input.append(view.searchForm)
        $("#btnDo").click(controller.getWeather)
    },
    processData:function(data)
    {
        console.log(JSON.stringify(data))
    },
    handleFail:function()
    {
        view.output.append("Error while getting json")
    }
}


$(controller.init)