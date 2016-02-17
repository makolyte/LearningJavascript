/**
 * Created by Mac on 1/30/2016.
 */

questionTree =
{
    'Question':"Does your car start?",
    'Answers': {
        "yes": "Left question 1",
        "no": "Right question 1"
    }
}


buildPage = function(){
    input = $("#divInput")

    input.append("<div id='question'>" + questionTree.Question + "</div><br>")
    input.append("<input type='radio' name='answer' value='yes'> Yes")
    input.append("<input type='radio' name='answer' value='no'> No")

    $("input[name='answer']").change(
        function(){
            $("#output").text(questionTree.Answers[$(this).val()])
        }
    )
}

$(buildPage)

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


