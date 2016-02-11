/**
 * Created by Mac on 1/30/2016.
 */


doStuff = function(){
    var width = getInt("txtWidth")
    var length = getInt("txtLength")

    var areaInFeet = width * length
    var areaInMeters = areaInFeet * 0.09290304

    var output = ["You entered", width, "by", length, ".<br>",
                 "The area is ", areaInFeet, "in sqft and", areaInMeters, "in sqm"
                    ]

    addHtml("txtOutput", output.join(" "))
}



