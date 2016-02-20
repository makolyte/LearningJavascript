/**
 * Created by Mac on 1/30/2016.
 */

var sum = 0;
var sumString = "";

sumInput = function()
{
    var num = parseFloat($("#input").val())
    $("#input").val("")

    sum += num;
    if (sumString == "")
        sumString += num
    else
        sumString += " + " + num;

    $("#output").text(sumString + " = " + sum)

}

buildPage = function(){
    input = $("#divInput")

    input.append("Number <input type='number' id='input'><br>");
    $("#input").change(sumInput)

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


