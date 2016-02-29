var model = {
    data:[]
}

var view = {
    inputArea:$("#divInput"),
    output:$("#output"),
    searchForm:"Movie to find <input type='text' id='movie'><br>"
    + "<button id='btnSearch'>Search</button> ",
    movie:"Title: $title<br>Year: $year<br>Rating: $rating<br>Running time: $runtime<br>Description: $description<br><br>$consensus"
}

var controller = {
    self:controller,

    apiSuccess:function(data)
    {
        var movie = data;

        console.log(data)

        var output = view.movie.replace("$year", movie.Year).replace("$rating", movie.tomatoMeter)
            .replace("$runtime", movie.Runtime).replace("$description", movie.Plot).replace("$consensus", movie.tomatoConsensus)
            .replace("$title", movie.Title)

        view.output.text('')
        view.output.append(output)
    },
    apiError:function(){
        view.output.text('Error while loading data')
    },
    search:function(){
        console.log("search fn")
        var movie = $("#movie").val()
        $.ajax({
            url:"http://www.omdbapi.com/",
            data:{
                t:movie,
                r:"json",
                tomatoes:"true"
            },
        success:controller.apiSuccess,
        error:controller.apiError})

    },
    init:function(){
       view.inputArea.append(view.searchForm)
       $("#btnSearch").click(controller.search)

    }
}


$(controller.init)