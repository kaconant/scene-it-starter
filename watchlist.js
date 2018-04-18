var watchlistJSON = localStorage.getItem("watchlist");
var watchlist = JSON.parse(watchlistJSON);

$(function() {
    var movieResults = renderMovies(watchlist);
    $(".card-deck").append(movieResults);

    function renderMovies(watchlist) {
        var finalHTML = "";  
        watchlist.forEach(function(currentMovie) {
            finalHTML += "<div class='card-deck'>";
            finalHTML += "<div class='movie card border-primary'>";
            finalHTML += "<img class='card-img-top' alt='Card img cap' src=" + currentMovie.Poster + "/>";
            finalHTML += "<div class='card-body'>";
            finalHTML += "<h5 class='title card-title'>" + currentMovie.Title + "</h5>";
            finalHTML += "<h6 class='year'>Released: " + currentMovie.Year + "</h6>";
            finalHTML += "<div class='button card-footer'>";
            finalHTML += "<button data-id='" + currentMovie.imdbID + "'class='removeMovie btn btn-primary'>Remove me!</button>";
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
        });
        return finalHTML;
    }; 
        
    $(".card-deck").on("click", ".removeMovie", function() {
        var imdbID = $(this).data("id");
        watchlist = watchlist.filter(function(currentMovie) {
            return currentMovie.imdbID != imdbID;
        });
        
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", watchlistJSON);

        $(this).parent().parent().parent().parent().remove();
    });

});

/* 
true false or 1 0
update the keys in watchlist.js - on click listener
.find movie and give extra property currentMovie.rating 
add HTML in renderMovies 
*/
