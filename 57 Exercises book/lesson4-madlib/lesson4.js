/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    var output = ["Do you", "{verb}", "your", "{adjective}",  "{noun}", "{adverb}", "? That's hilarious!"]
    output[1] = document.getElementById("txtVerb").value
    output[3] = document.getElementById("txtAdj").value
    output[4] = document.getElementById("txtNoun").value
    output[5] = document.getElementById("txtAdverb").value
    document.getElementById("theMoney").innerText = output.join(" ")
}

stringReplacer = function(){
    //trying this other way to do string substitutions
    var output = "Do you {verb} your {adjective} {noun} {adverb}? That's hilarious!"
    output = output.replace("{verb}", document.getElementById("txtVerb").value)
        .replace("{adjective}",document.getElementById("txtAdj").value)
        .replace("{noun}",document.getElementById("txtNoun").value)
        .replace("{adverb}",  document.getElementById("txtAdverb").value)

    document.getElementById("theMoney").innerText = output
}

