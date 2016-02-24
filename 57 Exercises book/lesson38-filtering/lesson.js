/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("Numbers <input type='text' id='numbers'><br>");
    input.append("<button onclick='doStuff()'>Find evens</button>");

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){
    var numbers = $("#numbers").val().split(" ")
    for(var i in numbers)
    {
        var number = numbers[i]
        if (number % 2 == 0)
            $("#output").append(number + " ")

    }
}


