/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    var curAge = parseInt(document.getElementById("txtAge").value)
    var retireAge = parseInt(document.getElementById("txtRetireAge").value)

    if (retireAge == curAge)
    {
        writeOutput("You can retire now, lucky!")
    }
    else if (retireAge < curAge)
    {
        writeOutput("You should already be retired.")
    }
    else
    {
        var yearsTilRetire = retireAge - curAge
        var retireYear = new Date().getFullYear() + yearsTilRetire

        var output = "You have to work for " + yearsTilRetire + " more year(s). You can retire in " + retireYear

        writeOutput(output)

    }





}

writeOutput = function(output)
{
    document.getElementById("txtOutput").innerHTML = output
}

