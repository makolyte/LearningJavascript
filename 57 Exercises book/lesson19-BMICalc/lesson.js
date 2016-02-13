/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    height = parseFloat($("#height").val())
    weight = parseFloat($("#weight").val())

    calc = (weight / (height * height))*703
    output = ["(", weight, "/", "(", height, "*", height, "))*703 = ", calc]

    $("#txtOutput").append(output.join(" "))

}


