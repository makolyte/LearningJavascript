var CatBuilder = function(name, imgSrc, nicknamesArray)
{
    return {
        name:name,
        imgSrc:imgSrc,
        nicknames:nicknamesArray,
        clickCount:0
    }
}

var data = [
    new CatBuilder("Tabby", "img/1.jpg", ["Tabs", "Stripes"] ),
    new CatBuilder("Nina", "img/2.jpg", ["Nini", "Nanita"]),
    new CatBuilder("Crispi", "img/3.jpg", ["Cripota", "Dreamy Mutty"]),
    new CatBuilder("Horse", "img/4.jpg", ["Neigh"]),
    new CatBuilder("Senor Gato", "img/5.jpg", ["El Don"])
]


var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount)
    this.name = ko.observable(data.name)
    this.imgSrc = ko.observable(data.imgSrc)
    this.nicknames = ko.observableArray(data.nicknames)
}



var ViewModel = function(){

    var self = this

    this.catList = ko.observableArray([])

    data.forEach(function(cat){
        self.catList.push(new Cat(cat))
    })

    this.currentCat = ko.observable(this.catList[0])

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1)
    }
    this.clickedCat = function(){
        console.log(this)
        self.currentCat(this)
    }
}

ko.applyBindings(new ViewModel())