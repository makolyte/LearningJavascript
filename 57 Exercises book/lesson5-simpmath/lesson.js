function mathIt()
{
    var num1 = parseInt(document.getElementById("txtNum1").value)
    var num2 = parseInt(document.getElementById("txtNum2").value)
    var sum = num1 + num2
    var diff = num1- num2
    var prod = num1 * num2
    var quo = num1 / num2

    var buildStringArr = ["{num1} + {num2} = {sum}",
                    "{num1} - {num2} = {diff}",
                    "{num1} * {num2} = {prod}",
                    "{num1} / {num2} = {quo}"]

    var output = buildStringArr.join("<br>")
    output = output.replace(/{num1}/g, num1)
    output = output.replace(/{num2}/g, num2)
    output = output.replace("{sum}", sum)
    output = output.replace("{diff}", diff)
    output = output.replace("{prod}", prod)
    output = output.replace("{quo}", quo)

    document.getElementById("txtOutput").innerHTML = output
}