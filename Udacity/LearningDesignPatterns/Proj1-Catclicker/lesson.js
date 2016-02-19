/**
 * Created by Mac on 1/30/2016.
 */

catAdder = function(name, imgURL)
{
    input = $("#divInput")
    var outputID = name +"clicks"
    var imgID = name + "img"
    input.append("<div id='" + name + "'>")
    input.append("<h1>"+name+"</h1><br>")
    input.append("<img src='" + imgURL+ "' alt='" + name +"' id='" + imgID + "'><br>")
    input.append("Clicks: <div id='" + outputID + "'>0</div>")
    input.append("</div>")


    $("#" + imgID).click(function(){
        var curClicks = parseInt($("#" + outputID).text())
        $("#" + outputID).text(curClicks+1)
    })
}

buildPage = function(){


    catAdder("tabby", "https://c2.staticflickr.com/2/1126/625069434_db86b67df8_n.jpg" )
    catAdder("chewie", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496")
}

$(buildPage)

doStuff = function(){

}


