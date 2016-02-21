/**
 * Created by Mac on 1/30/2016.
 */

getHeartRate = function(age, restingHR, intensity)
{
    /*
        Formula
        TargetHeartRate = (((220 - age) - restingPulse) * intensity) + restingPulse

     */

    var targetHeartRate = (((220 - age) - restingHR) * intensity) + restingHR
    return targetHeartRate
}

buildHRTable = function()
{
    var age = parseFloat($("#age").val())
    var pulse = parseFloat($("#pulse").val())

    $("#output").html('Intensity|HeartRate<br>')
    for(var i = 55; i < 100; i+=5 )
    {
        $("#output").append(i + "|" + getHeartRate(age, pulse, i / 100) + "<br>")
    }

}

buildPage = function(){
    input = $("#divInput")

    input.append("Age<input type='number' id='age' min='1'>")
    input.append("<br>")
    input.append("Resting pulse<input type='number' id='pulse' min='1'>")
    input.append("<br>")
    input.append("<button id='doStuffs'>Get heart rate table</button>")

    $("#doStuffs").click(buildHRTable)
}

buildPage()



