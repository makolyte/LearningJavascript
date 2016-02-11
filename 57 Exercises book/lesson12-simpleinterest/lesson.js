/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    p = parseFloat(document.getElementById("txtPrincipal").value)
    r = parseFloat(document.getElementById("txtInterestRate").value) / 100
    t = parseFloat(document.getElementById("txtYears").value)

    a = p*(1 + r*t)
    document.getElementById("txtOutput").innerHTML = ["Accrued", a].join(" ")

}


