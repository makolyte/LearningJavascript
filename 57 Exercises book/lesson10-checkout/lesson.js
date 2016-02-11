/**
 * Created by Mac on 1/30/2016.
 */

doStuff = function(){
    //I could hardcode getting the items but it would be better to use DOM things to teach myself that


    items =  document.getElementsByClassName("item")
    subtotal = 0
    for(i = 0; i < items.length; i++)
    {
        item = items[i]
        price = parseInt(item.getElementsByClassName("price")[0].value)
        qty = parseInt(item.getElementsByClassName("qty")[0].value)
        if (!isNaN(price) && !isNaN(qty))
            subtotal += price * qty
    }
    tax = subtotal * .06
    total = subtotal + tax

    output("Subtotal is " + subtotal)
    output("Tax is " + tax)
    output("Total is " + total)

}


