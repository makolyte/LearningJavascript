var model = {
    data: [
                {"name":"Widget", "price":25.00, "qty":5},
                {"name":"Thing", "price":15.00, "qty":5},
                {"name":"Doodad", "price":5.00, "qty":10}
                ]

}

var view = {
    searchForm:"Product to find <input type='text' id='search'><br>"
    + "<button id='btnSearch'>Search</button> ",
    inputArea:$("#divInput"),
    output:$("#output")
}

var controller = {

    searchHandler:function(){

        var search = $("#search").val()
        model.data.filter(function(record){ return record.name == search}).forEach(
            function(record){
                view.output.text(JSON.stringify(record))

            }

        )
    },
    init:function(){
       view.inputArea.append(view.searchForm)

        $("#btnSearch").click(controller.searchHandler)
    }
}


$(controller.init)