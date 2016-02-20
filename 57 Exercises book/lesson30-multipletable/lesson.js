/**
 * Created by Mac on 1/30/2016.
 */

buildPage = function(){
    input = $("#divInput")

    var table = "" //learned that jquery.append will automatically try to close tags

    table += "<table border='1'>"


    for (var i = -1; i < 13; i++)
    {
        table += "<tr>"
        for(var j = -1; j < 13; j++)
        {
            table += "<td>"
            if (i == -1)
            {
                if (j != -1)
                {
                    table += j
                }
            }
            else if (j == -1)
            {
                table += i
            }
            else
            {
                table += (i * j)
            }
            table += "</td>"
        }
        table += "</tr>"
    }
    table += "</table>"

    input.append(table)


}

buildPage()



