var main = function () {
    "use strict";
    
    var url = "http://api.bestbuy.com/beta/products/mostViewed?callback=?&apiKey=geejm986jssrtq4db9kczp5v";
    var $resultsContainer = $("#results");
    
    $.getJSON(url, function(jsonResponse) {
              console.log(jsonResponse);
              jsonResponse.results.forEach(function(result) {
                var $item = $("<p>").text(result.names.title);
                $resultsContainer.append($item);
              });
    });
    
};

$(document).ready(main);