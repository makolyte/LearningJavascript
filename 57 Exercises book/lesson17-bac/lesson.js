/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    weight = $("#weight").val()
    isFemale = $("#gender").val()
    drinks = $("#drinks").val()
    proof = $("#proof").val()
    time = $("#hours").val()

    alDistRatio = 0.73
    if (isFemale)
        alDistRatio = 0.66

    $("#txtOutput").append("BAC = " + ((drinks * 5.14/weight * alDistRatio) - 0.015 * time))

}


