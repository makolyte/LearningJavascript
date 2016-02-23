/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("Enter numbers (sep by comma) <input type='text' id='numbers'><br>");
    input.append("<button onclick='doStuff()'>Get Stats</button>");

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){
    var sum = 0
    var count = 0
    $("#numbers").val().split(",").forEach(function(num)
    {
        sum += parseFloat(num)
        count++
    })


    $("#output").append("Average: " + (sum / count))
}


