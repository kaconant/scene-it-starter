var watchlistJSON = localStorage.getItem("watchlist");
var watchlist = JSON.parse(watchlistJSON);

$(function() {
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
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
        });
        return finalHTML;
    }; 
        var movieResults = renderMovies(watchlist);
        $(".card-deck").append(movieResults);
});