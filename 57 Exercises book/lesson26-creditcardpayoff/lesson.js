/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("Balance: <input type='number' id='balance' value='5000'><br>")
    input.append("APR: <input type='number' id='apr' value='12'><br>")
    input.append("Monthly payment: <input type='number' id='monthpay' value='100'><br>")
    input.append("<button onclick='doStuff()'>DoStuff</button>")


}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){

    balance = parseFloat($("#balance").val())
    apr = parseFloat($("#apr").val())/365
    monthpay = parseFloat($("#monthpay").val())

    left = (-1/30)
    var n = (balance / monthpay)
    var m = Math.pow((1 + apr), 30)
    var p = (n)*(1 - m)
    var top = Math.log( 1 + p)
    bottom = Math.log(1 + apr)



    $("#output").text(left * (top / bottom))
}


