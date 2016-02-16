/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    input.append("Month between 1-4 <input onchange='doStuff()' type='number' id='month'><br>");

}

buildPage()

//Learned i needed to put the <script at the bottom of the HTML, because
//it was calling this at the beginning, when
//there wasn't any elements on the page

doStuff = function(){
    $month = parseInt($("#month").val())
    monthName = ""
    switch($month)
    {
        case 1:
            monthName = "Jan"
            break;
        case 2:
            monthName = "Feb"
            break;
        case 3:
            monthName = "March"
            break;
        case 4:
            monthName = "April"
            break;
        default:
            monthName = "N/A"
    }
    $("#output").text(monthName)

}


