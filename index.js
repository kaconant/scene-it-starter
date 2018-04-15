$(function() {
    function renderMovies(movieArray) {
        var finalHTML = "";  
        movieArray.forEach(function(currentMovie) {
            finalHTML += "<div class='card-deck'>";
            finalHTML += "<div class='movie card border-primary'>";
            finalHTML += "<img class='card-img-top' alt='Card img cap' src=" + currentMovie.Poster + "/>";
            finalHTML += "<div class='card-body'>";
            finalHTML += "<h5 class='title card-title'>" + currentMovie.Title + "</h5>";
            finalHTML += "<h6 class='year'>Released: " + currentMovie.Year + "</h6>";
            finalHTML += "<div class='button card-footer'>";
            finalHTML += "<a href=''class='btn btn-primary'>Add Movie</a>";
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"
            finalHTML += "</div>"

        });
        return finalHTML;
    };
    $("form").submit(function(e) {
        e.preventDefault();
        var movieResults = renderMovies(movieData);
        $(".card-deck").html(movieResults);
    });
});

