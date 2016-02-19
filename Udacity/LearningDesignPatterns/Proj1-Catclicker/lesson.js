/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("<img src='https://c2.staticflickr.com/2/1126/625069434_db86b67df8_n.jpg' alt='cat' id='imgcat'><br>")
    $("#output").text("0")

    $("#imgcat").click(function(){
        var curClicks = parseInt($("#output").text())
        $("#output").text(curClicks+1)
    })
}

$(buildPage)

doStuff = function(){

}


