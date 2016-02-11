/**
 * Created by Mac on 1/30/2016.
 */

TAX_RATE = 5.5 / 100

doStuff = function(){
    state = document.getElementById("state").value;
    orderAmt = parseFloat(document.getElementById("amount").value)
    if (isNaN(orderAmt))
        orderAmt = 0

    tax = 0
    subtotal = orderAmt
    if (state == "WI")
    {
        tax +=  orderAmt * TAX_RATE
    }

    outArr = ["Subtotal:"+orderAmt, "Tax:"+tax, "Total:"+(subtotal+tax)]
    output(outArr.join("<br>"))

}


