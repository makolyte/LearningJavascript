/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")
    for (i = 0; i < 3; i++)
    {
        input.append("Number #" + i + " <input type='number' value='0'><br>")
    }
    input.append("<button onclick='doStuff()'>Find biggest</button>");

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){
    var largest = 0
    $("input").each(function(){
        if ($(this).val() > largest)
            largest = $(this).val()
    })


    $("#output").text("Largest is " + largest)
}


