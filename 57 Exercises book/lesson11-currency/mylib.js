getVal = function(elementID)
{
    //I'm pretty sick of typing this out over and over
    return document.getElementById(elementID).value
}

getInt = function(elementID)
{
    return parseInt(getVal(elementID))
}

addHtml = function(elementID, html)
{
    document.getElementById(elementID).innerHTML += html
}

function output(html)
{
    addHtml("txtOutput", html + "<br>")
}