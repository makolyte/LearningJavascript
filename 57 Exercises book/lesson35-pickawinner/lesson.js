/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("Person <input type='text' id='person'><br>");
    input.append("<button onclick='addPerson()'>Add person</button>")
    input.append("<button onclick='doStuff()'>Pick winner</button>");

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

people = []
addPerson = function(){
    var person = $("#person").val()
    people.push(person)
    $("#person").val('')
}

doStuff = function(){
    var winner = people[Math.floor((Math.random() * people.length))]

    $("#output").append("Winner is " + winner + "<br>")
}


