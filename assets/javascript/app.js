$(document).ready(function () {

    //TO DOS
    //Improve the style


    //USER INPUTS
    //create an array to store the user input
    var arrUserGif = []


    //BUTTONS PRELOAD
    //When any of the buttons preload is clicked ...

    $(".definedButton").on("click", function () {

        //Taking the value giving to that button in the HTML
        var typeOfGif = $(this).attr("data-science")
    
        //Add the link needed for calling the API
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            typeOfGif + "&api_key=EGOEsx7oEvGNmXEIBBfiQzAhbKu7dngF&limit=4"

        //Clear the results
        //Make the user Input its data

        //Using Jquery to call the Api
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
                    var gifDiv = $("<div class=col-2>");
                    //Show the rating of the gif
                    var rating = results[i].rating;
                    //Add the result or value of the rating in our HTML 
                    var ratingText = $("<h5 class=card-text allign>").text("Rating: " + rating);
                    var ratingText = $("<p>").text("Rating: " + rating);

                    //Create and image that has the source of that particular url
                    var gifImg = $("<img>");
                    gifImg.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(gifImg);
                    gifDiv.prepend(ratingText);

                    $("#images").append(gifDiv);
                }
            });

    })


    //USER BUTTONS

    //Export the data the user types and add it to the new button
    $("#add-gif").on("click", function (event) {
        event.preventDefault();

        // Grab the input from the form
        var userGifText = $("#gif-input").val().trim();
        console.log(userGifText)
        arrUserGif.push(userGifText);

        //Create user button
        var $userButton = $("<button>");
        $userButton.addClass("gifButton");
        $userButton.attr("data-gif", userGifText);
        $userButton.text(userGifText);
        $("#userButtons").append($userButton);

    })

    //
    function displayGIF() {
        console.log(this)
        var userGif = $(this).attr("data-gif");
        console.log(this)
        var queryURLuser = "https://api.giphy.com/v1/gifs/search?q=" +
        userGif + "&api_key=EGOEsx7oEvGNmXEIBBfiQzAhbKu7dngF&limit=4";
        //Using Jquery to call the Api
        $.ajax({
            url: queryURLuser,
            method: "GET"
        }).then(function (response) {
            console.log(results)

            var results = response.data;

            //Clear the document when loaded
            $(".gifDisplay").remove()
            //Create a For loop that will create results
            for (var i = 0; i < results.length; i++) {
                //Create a div that will contain the gif
                var gifDivUser = $("<div class=col-2 gifDisplay>");
                //Show the rating of the gif
                var rating = results[i].rating;
                //Add the result or value of the rating in our HTML 
                var ratingText = $("<p>").text("Rating: " + rating);

                //Create and image that has the source of that particular url
                var gifImg = $("<img>");
                gifImg.attr("src", results[i].images.fixed_height.url);

                gifDivUser.prepend(ratingText);
                gifDivUser.prepend(gifImg);

                $("#images").prepend(gifDivUser);
            }
        })
    }

    $(document).on("click", ".gifButton", displayGIF);


});


