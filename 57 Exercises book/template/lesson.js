/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    var output = ["Do you", "{verb}", "your", "{adjective}",  "{noun}", "{adverb}", "? That's hilarious!"]
    output[1] = document.getElementById("txtVerb").value
    output[3] = document.getElementById("txtAdj").value
    output[4] = document.getElementById("txtNoun").value
    output[5] = document.getElementById("txtAdverb").value
    document.getElementById("txtOutput").innerText = output.join(" ")
}


