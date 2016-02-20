/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("<input type='number' min='1' id='rate'>")



    $("#rate").change(
        function() {
            var rate = parseFloat($(this).val())
            $("#output").append("It will take " + (72 / rate) + " years to double your investmnet")
        })


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


