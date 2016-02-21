/**
 * Created by Mac on 1/30/2016.
 */


var game = {
    diff:"",
    number:0,
    choices:[]
}



startGame = function(diff)
{
    $("#output").append("Diff chosen: " + diff + "<br>")
    game.diff = diff
    game.choices = []
    var min = 1
    var max = 1
    switch(diff)
    {
        case "1-10":
            max = 10;
            break;
        case "1-100":
            max = 100;
            break;
        case "1-1000":
            max = 1000;
            break;
    }

    game.number = Math.floor(Math.random() * (max - min) + min)
    $("#output").append("Start guessing<br>")

}

checkGuess = function()
{
    if(game.number == 0)
    {
        $("#output").append("You need to select a difficulty level")
    }

    var guess = parseInt($("#guess").val())
    game.choices.push(guess)
    if(guess == game.number)
    {
        $("#output").append("You guessed correctly in " + game.choices.length + " tries<br>")
    }
    else
    {
        if (guess < game.number)
            $("#output").append(guess + " is too low<br>")
        else
            $("#output").append(guess + " is too high<br>")
    }

}

buildPage = function(){
    input = $("#divInput")
    input.append("Choose difficulty<br>")
    input.append("<input type='radio' name='diff' checked value='1-10'>1-10<br>")
    input.append("<input type='radio' name='diff' value='1-100'>1-100<br>")
    input.append("<input type='radio' name='diff' value='1-1000'>1-1000<br>")
    input.append("<br>")
    input.append("<input type='number' min='1' id='guess'><br>")
    input.append("<button id='chooser'>Guess</button>")

    $("#chooser").click(checkGuess)
    $("input[name='diff']").change(function() {
        startGame($(this).val())
    })

    startGame("1-10")
}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page




