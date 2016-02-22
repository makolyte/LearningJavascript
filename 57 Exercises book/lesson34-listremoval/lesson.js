/**
 * Created by Mac on 1/30/2016.
 */


var employees = [
    "Mac",
    "Yasmin",
    "Gail",
    "Kalvin",
    "Linda",
    "Katie",
    "Doug",
    "Susan"
]

removeEmp = function(e)
{
    var employee = $(e.target).attr("id")
    $("#output").append("Employee " + employee + " clicked")
    employees.splice($.inArray(employee, employees), 1)
    buildPage()
}

buildPage = function(){
    input = $("#divInput")
    input.text('')
    $("#output").text('')

    var buildList = ""
    buildList += "<span>" + "There are " + employees.length + " employees. Click to remove</span>"
    buildList += "<ol id='emplist'>"
    for (var i in employees)
    {
        var employee = employees[i]
        buildList += "<li class='emp' id='" + employee +"'>" +employee
    }
    buildList += "</ol>"

    input.append(buildList)
    $("#emplist").on('click', 'li', removeEmp)

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){
    orderAmt = parseFloat( $("#amount").val())
    state = $("#state").val()
    county = $("#county").val()

    tax = 0

    if (state == "WI")
    {
        if (county == "1")
            tax = orderAmt * 0.05
        else if (county == "2")
            tax = orderAmt * 0.10
        else
            tax = orderAmt * 0.025
    }

    output =

    $("#output")
}


