var model = {
    data:[],
    init:function()
    {
        model.data =[
        model. buildEmpObj("John", "Johnson", "Manager", "2016-12-31"),
        model.buildEmpObj("Tou", "Xiong", "Software Engineer", "2016-10-05"),
        model.buildEmpObj("Michaela", "Michaelson", "District Manager", "2015-12-19"),
        model.buildEmpObj("Jake", "Jacobson", "Programmer", ""),
        model.buildEmpObj("Jacquelyn", "Jackson", "DBA", ""),
        model.buildEmpObj("Sally", "Weber", "Web Developer", "2015-12-18")
    ]
    },
    buildEmpObj:function(first, last, position, leftdate)
    {
        return { //Javascript "unexpected token :" if the { is on a new line
            "first":first,
            "last":last,
            "position":position,
            "leftdate":leftdate

        }
    }
}

var view = {
    searchForm:"Name to find <input type='text' id='search'><br>"
    + "<button id='btnSearch'>Search</button> "
}

var controller = {
    inputArea:$("#divInput"),
    init:function(){
       model.init()

    }
}


$(controller.init)