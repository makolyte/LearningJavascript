/**
 * Created by Mac on 1/30/2016.
 */


var answers = ["Yes", "No", "Maybe", "Ask later"]

buildPage = function(){
    input = $("#divInput")

    input.append("Question <input type='text' id='Question'><br>");
    input.append("<button onclick='doStuff()'>Ask</button>");

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){
    var question = $("#Question").val()
    var answer = answers[Math.floor(Math.random() * answers.length)]


    $("#output").text(answer)
}


