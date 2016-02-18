
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    $street = $("#street")
    $city = $("#city")
    $body.append("<img class='bgimg' src='https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + $street.val() + "," + $city.val() + "'>")

    nyAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $city.val() + "&sort=newest&api-key=710fde8aa15c7f38eff4d0e79fe2b529:10:69345159"
    data = $.getJSON(nyAPI,
        function(data)
        {
             $nytHeaderElem.text("NY Times Articles about " + $city.val())
            articles = data.response.docs;
            for(var i = 0; i < articles.length; i++) {
                var article = articles[i]
                $nytElem.append('<li class="article">' +
                    '<a href="' + article.web_url + '">' +
                    article.headline.main + '</a>'
                    + '<p>' + article.snippet + '</p>'
                    +
                    '</li>')
            }

            }
    ).error(function(){
         $nytHeaderElem.text("NY Times Articles could not be loaded ")
    })


    //wiki request here
    //https://www.mediawiki.org/wiki/API:Main_page
    var whyisgitnotworking = 0
    wikiAPI = "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + $city.val() + "&format=json&callback=wikiCallback"
    data = $.ajax(
        {
            url: wikiAPI,
            dataType: "jsonp",
            success: function(response){
                var articleList = response[1]
                for(var i = 0; i < articleList.length; i++)
                {
                    articleStr = articleList[i]
                    var url = "http://en.wikipedia.org/wiki/" + articleStr;

                    htmlSnip = ["<li>", "<a href='", url, "'>", articleStr, "</a>", "</li>"]

                    $wikiElem.append(htmlSnip.join())
                }
            }
        }
    )
    return false;
};

$('#form-container').submit(loadData);

// loadData();
