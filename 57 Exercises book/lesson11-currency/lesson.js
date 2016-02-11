/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    exchangeRate = parseFloat(document.getElementById("txtExchangeRate").value)
    euros = parseFloat(document.getElementById("txtEuros").value)

    usd  = (euros * exchangeRate)



    document.getElementById("txtOutput").innerHTML = ["$", usd].join();
}


