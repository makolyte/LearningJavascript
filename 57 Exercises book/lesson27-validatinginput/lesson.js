/**
 * Created by Mac on 1/30/2016.
 */

validateName = function(element)
{
    if (element.val().length < 2) {
            $("#output").append("First and last name must be at least 2 chars<br>")

        }
}

validate = function(e){
    target = $(e.target)
    id = target.attr("id")
    if (id == "firstname" || id == "lastname")
    {
        validateName(target)
    }
    else if (id == "zip")
    {
        if (isNaN(parseInt(target.val())))
        {
            $("#output").text("Zip must be a number")
            return
        }
    }
    else
    {
        //emp id must be in hte format two letters-4 numbers
        pattern = new RegExp("[A-Za-z]{2}-[0-9]{4}")
        if (!pattern.test(target.val()))
        {
            $("#output").text("EmpID is not in the correct format")
        }
    }
}

buildPage = function(){
    input = $("#divInput")

    input.append("First Name <input type='text' id='firstname'><br>");
    input.append("Last Name <input type='text' id='lastname'><br>");
    input.append("Emp ID <input type='text' id='empid'><br>");
    input.append("ZIP Code <input type='number' id='zip'><br>")
    input.append("<button onclick='doStuff()'>Calc tax</button>");

    $("input").on("change", validate)
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


