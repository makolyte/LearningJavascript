/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    temp = parseFloat($("#temp").val())
    conversion = $("input[name='conversion']:checked").val()

    output = 0
    if (conversion == "F2C")
    {
        output = (temp - 32) * (5/9)
    }
    else
    {
        output = (temp * 9/5) + 32
    }

    $("#txtOutput").append(output + " <br>")
}


