/**
 * Created by Mac on 1/30/2016.
 */

isLetter = function(curChar)
{
    if (curChar <= 90 && curChar >= 65)
        return true
    else if (curChar <= 122 && curChar >= 97)
        return true
    else
        return false


}

doStuff = function(e){
    var curPassword = $(e.target).val()
    var len = curPassword.length

    var numLetters = 0
    var numNumbers = 0
    var numSpecial = 0

    for(char in curPassword)
    {
        var curChar = curPassword.charCodeAt(char)
        if (curChar <= 57 && curChar >= 48)
            numNumbers++
        else if (isLetter(curChar))
            numLetters++
        else
            numSpecial++


    }

   if (len == numNumbers)
       output("Weak")
    else if (len == numLetters)
       output("Medium")
    else
       output("Strong")

}

buildPage = function(){
    input = $("#divInput")

    input.append("Password <input type='text' id='password'><br>");
    $("#password").keyup(doStuff)

}

buildPage()

output = function(msg)
{
    $("#output").text(msg)
}
//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page




