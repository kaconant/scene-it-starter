var movieData = [];

$(function() {
    function renderMovies(movieArray) {
        var finalHTML = "";  
        movieArray.forEach(function(currentMovie) {
            finalHTML += "<div class='card-deck'>";
            finalHTML += "<div class='movie card border-primary'>";
            if (currentMovie.Poster == "N/A") {
                finalHTML += "<img class='card-img-top' alt='Card img cap' src='no_image.png'/>";
            } else {
                finalHTML += "<img class='card-img-top' alt='Card img cap' src=" + currentMovie.Poster + "/>"; 
            };
            finalHTML += "<div class='card-body'>";
            finalHTML += "<h5 class='title card-title'>" + currentMovie.Title + "</h5>";
            finalHTML += "<h6 class='year'>Released: " + currentMovie.Year + "</h6>";
            finalHTML += "<div class='button card-footer'>";
            finalHTML += "<button data-id='" + currentMovie.imdbID + "'class='addMovie btn btn-primary'>Add Movie</button>";
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
        });
        return finalHTML;
    };
    
    $("form").submit(function(e) {
        e.preventDefault();
        var searchString = $(".search-bar").val();
        var urlEncodedSearchString = encodeURIComponent(searchString);
        $.ajax({
            method: "GET",
            url: "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString,
            success: function(response) {
                movieData = response.Search;
                var movieResults = renderMovies(response.Search);
                $(".card-deck").html(movieResults);
            }
        });
    });

    $(".card-deck").on("click", ".addMovie", function() {
        var imdbID = $(this).data("id");
        var movie = movieData.find(function(currentMovie) {
            return currentMovie.imdbID === imdbID;
        });
        
        var watchlistJSON = localStorage.getItem("watchlist");
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            watchlist = [];
        }; 
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", watchlistJSON);
    });
});

