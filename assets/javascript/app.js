//Add the information of bootstrap/ Jquery and API
//Code of Api for FILMS of adding buttons follow the same path
//Get first button to work
// Add the adding button with the categories needed

//Add the function for on click for the buttons
//Can we make the code better with when the user clicks on any button take that info

//MOON
$("button").on("click", function () {
    //Taking the value giving to that button in the HTML
    var typeOfGif = $(this).attr("data-science")
    console.log(typeOfGif);
    //Add the link needed for calling the API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    typeOfGif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10"

    //Using Jquery to call the Apo
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            //console.log to see the result of the object
            console.log(response)

            //Create a a variable of the results that will look into the data
            var results = response.data;

            //Create a For loop that will create results
            for (var i = 0; i < results.length; i++) {
                //Create a div that will contain the gif
                var gifDiv = $("<div class=col-1>");
                //Show the rating of the gif
                var rating = results[i].rating;
                //Add the result or value of the rating in our HTML 
                var ratingText = $("<p>").text("Rating: " + rating);

                //Create and image that has the source of that particular url
                var gifImg = $("<img>");
                gifImg.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(ratingText);
                gifDiv.prepend(gifImg);

                $("#images").prepend(gifDiv);
            }
        });

})