buildEmpObj = function(first, last, position, leftdate)
{
    return { //Javascript "unexpected token :" if the { is on a new line
        "first":first,
        "last":last,
        "position":position,
        "leftdate":leftdate

    }
}

buildPage = function() {
    input = $("#divInput")

    var data = [
        buildEmpObj("John", "Johnson", "Manager", "2016-12-31"),
        buildEmpObj("Tou", "Xiong", "Software Engineer", "2016-10-05"),
        buildEmpObj("Michaela", "Michaelson", "District Manager", "2015-12-19"),
        buildEmpObj("Jake", "Jacobson", "Programmer", ""),
        buildEmpObj("Jacquelyn", "Jackson", "DBA", ""),
        buildEmpObj("Sally", "Weber", "Web Developer", "2015-12-18")
    ]

    //learned how to use comparison
    data.sort(function(a, b){
        return b.last - a.last
    })

    console.log(data)

}

$(buildPage)