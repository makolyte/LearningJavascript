/**
 * Created by Mac on 1/30/2016.
 */

SQFT_PER_GALLON = 350
doStuff = function(){
    len = getInt("txtLen");
    width = getInt("txtWidth")
    sqft = len * width;

    gallonsNeeded = Math.ceil(sqft / SQFT_PER_GALLON)
    output("You need " + gallonsNeeded + " gallon(s) of paint")
}


