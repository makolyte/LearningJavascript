/**
 * Created by Mac on 1/30/2016.
 */

catAdder = function(cat)
{


}

function buildCat(catID, name, url)
{

        var outputID = name +"clicks"
        var imgID = name + "img"
        var display = "<div id='" + name + "'>"
        display += "<h1>"+name+"</h1><br>"
        display += "<img src='" + url+ "' alt='" + name +"' id='" + imgID + "'><br>"
        display += "Clicks: <div id='" + outputID + "'>$clicks</div>"
        display += "</div>"


    clickHandler = function(){
        cats[catID].clicks++
        $("#" + outputID).text(cats[catID].clicks)
    }


    return {
        "name": name,
        "url":url,
        "clicks":0,
        "display":display,
        "imgID":imgID,
        "clickHandler":clickHandler
    }
}

catItemClicked = function(catIndex)
{
    var cat = cats[catIndex]

    var display = $("#display")
    display.html(cat.display.replace("$clicks", cat.clicks))
    $("#" + cat.imgID).click(cat.clickHandler)
}


var cats = []

buildPage = function(){
    cats.push(buildCat(0, "tabby", "https://c2.staticflickr.com/2/1126/625069434_db86b67df8_n.jpg"))
    cats.push(buildCat(1, "chewie", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"))
    cats.push(buildCat(2, "bob", "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"))

    var list = "<div>Select cat to display<ul>"
    for(var catIndex in cats)
    {
        var cat = cats[catIndex ]
        var listItem = "<li id='" + catIndex + "' onclick='catItemClicked(" + catIndex + ")'>" + cat.name + " </li>"
        list += listItem
    }
    list += "</ul></div>"

    $("body").append(list)

    var displayDiv = "<div id='display'></div>"

    $("body").append(displayDiv)

}

$(buildPage)

doStuff = function(){

}


