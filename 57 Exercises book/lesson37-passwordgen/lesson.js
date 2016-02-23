
var numArr = []
var specialArr = []
var charArr = []


putRange = function(startChar, endChar)
{
    var arr = []
    for(var i = startChar.charCodeAt(0); i < endChar.charCodeAt(0); i++)
    {
        arr.push(i)
    }
    return arr
}

buildPage = function(){
    input = $("#divInput")

    input.append("Min len <input type='number' id='minlen'><br>");
    input.append("Special chars <input type='number' id='specialchars'><br>");
    input.append("Numbers <input type='number' id='numbers'><br>");
    input.append("<button onclick='doStuff()'>Gen Pass</button>");


    numArr = putRange('0', '9')
    specialArr = putRange('!', '/')
    charArr = putRange('a', 'z').concat(putRange('A', 'Z'))

}

buildPage()

randomItem = function(arr)
{
    var length = arr.length
    var random = Math.floor((Math.random() * length))
    return arr[random]
}

randomIndex = function(arr)
{
    var length = arr.length
    return Math.floor(Math.random() * length)
}

function pushRandomChars(destArr, len, sourceArr)
{
     for(var i = 0; i < len; i++)
    {
        var randomPos = randomIndex(destArr)
        var randomChar = String.fromCharCode(randomItem(sourceArr))
        destArr.splice(randomPos, 0, randomChar)
    }
}

doStuff = function(){

    var password = []
    //minlen will be the number of chars
    var minlen = parseInt($("#minlen").val())
    var specialChars = parseInt($("#specialchars").val())
    var numbers = parseInt($("#numbers").val())

    pushRandomChars(password, minlen, charArr)
    pushRandomChars(password, specialChars, specialArr)
    pushRandomChars(password, numbers, numArr)

    $("#output").append(password.join(''))
}


