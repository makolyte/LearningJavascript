var model = {
    data:[]

}

var view = {
    searchForm:"Name to add <input type='text' id='name'><br>"
    + "<button id='btnAdd'>Add</button> "
}

var controller = {
    inputArea:$("#divInput"),


    success:function(data){
        console.log(data)
    },
    fail:function(){
        console.log("error happened")
    },
    init:function(){


        $.ajax(
            {
               url:"https://fiery-torch-9187.firebaseio.com/users.json",
                success:controller.success,
                error:controller.fail
            }

        )

    }
}


$(controller.init)