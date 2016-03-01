var model = {
    data:{},
    init:function(){
        if (localStorage.data === null)
        {
            localStorage.data = model.data;
        }
    },

    count:function(){
        return Object.keys(JSON.parse(localStorage.data)).length
    },
    add:function(url, shorty) {
        var ldata = JSON.parse(localStorage.data);
        ldata.url = shorty;
        localStorage.data = JSON.stringify(ldata);

    }
}

var view = {
    input:$("#divInput"),
    output:$("#output"),
    form:"URL to shorten<input type='text' id='url'><br>"
    + "<button id='do'>Shorten</button> "
}

var controller = {

    shorten:function(){
        var url = $("#url")
        var short = "http://" + model.count()
        model.add(url, short)
    },
    init:function(){
        model.init()
        view.input.append(view.form)
        $("#do").click(controller.shorten)
    }
}


$(controller.init)