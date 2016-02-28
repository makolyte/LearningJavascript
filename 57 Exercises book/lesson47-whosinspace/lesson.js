var model = {
    data:{}
}

var view = {
    searchForm:"Name to find <input type='text' id='search'><br>"
    + "<button id='btnSearch'>Search</button> "
}

var controller = {
    init:function(){
        $.ajax({
            url:"http://api.open-notify.org/astros.json",
            dataType:"jsonp",
            success:controller.processData,
            error:controller.handleFail
        })

    },
    processData:function(data)
    {
        data.people.forEach(
            function(person){
                $("#output").append(person.name + " is on " + person.craft + "<br>")
            }
        )
    },
    handleFail:function()
    {
        $("#output").append("Error while getting astronaut json")
    }
}


$(controller.init)