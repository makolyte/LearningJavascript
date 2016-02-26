var model = {
    rawdata:"Ling,Mai,55900 \n"+
"Johnson,Jim,56500 \n"+
"Jones,Aaron,46000 \n"+
"Jones,Chris,34500 \n"+
"Swift,Geoffrey,14200 \n"+
"Xiong,Fong,65000 \n"+
"Zarnecki,Sabrina,51500",
    structureddata:[],
    buildDataObj:function(last, first, salary)
    {
        return {last:last, first:first, salary:salary}
    }
}

var view = {
    searchForm:"Name to find <input type='text' id='search'><br>"
    + "<button id='btnSearch'>Search</button> "
}

var controller = {
    inputArea:$("#divInput"),
    init:function(){
       model.rawdata.split('\n').forEach(function(line){
           var arr = line.split(',')
           model.structureddata.push(model.buildDataObj(arr[0], arr[1], arr[2]))
       })

        console.log(model.structureddata)

    }
}


$(controller.init)