/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("State <input type='text' id='state'><br>");
    input.append("County <input type='text' id='county'><br>");
    input.append("Order Amount <input type='number' id='amount'><br>");
    input.append("<button onclick='doStuff()'>Calc tax</button>");

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


