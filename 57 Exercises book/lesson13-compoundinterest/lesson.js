/**
 * Created by Mac on 1/30/2016.
 */

function getFloat(fieldID){
    field = parseFloat(document.getElementById(fieldID).value)
    if (isNaN(field))
        return 0
    else
        return field
}

doStuff = function(){
    principal = getFloat("p")
    rate = getFloat("r") / 100
    years = getFloat("y")
    compounds = getFloat("c")

    output(principal * Math.pow(1 + rate / compounds, compounds * years))




}


