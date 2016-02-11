/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    numPpl = getInt("txtNumPpl")
    numPizzas = getInt("txtNumPizzas")
    addHtml("txtOutput", "Numppl="+numPpl + " NumPizzas="+numPizzas+"<br><br>")

    remainder = numPizzas % numPpl

    html = "Num slices per person = " + Math.floor(numPizzas / numPpl) + "<br>" + "Remaining slices: " + remainder

    addHtml("txtOutput", html)

}


