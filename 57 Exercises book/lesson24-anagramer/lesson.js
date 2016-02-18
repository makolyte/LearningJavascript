/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("Word 1 <input type='text' id='word1'><br>");
    input.append("Word 2 <input type='text' id='word2'><br>");
    input.append("<button onclick='doStuff()'>Anagrams?</button>");

}

buildPage()

output = function(msg)
{
    $("#output").text(msg)
}


doStuff = function(){
    word1 = $("#word1").val()
    word2 = $("#word2").val()

    word1

    if (word1.length == word2.length)
    {
        for(var i in word1)
        {
            var loc = word2.indexOf(word1[i])
            if (loc == -1)
            {
                output("not an anagram")
                return
            }


            word2 = word2.slice(0, loc) + word2.slice(loc+1)
        }
        output("Is an anagram")
    }
    else
    {
        output("Not an anagram")
    }
}


