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
            typeOfGif + "&api_key=EGOEsx7oEvGNmXEIBBfiQzAhbKu7dngF&limit=12"

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
                $("#images").empty();
                //Create a For loop that will create results
                for (var i = 0; i < results.length; i++) {
                    //Create a div that will contain the gif
                    var gifDiv = $("<div class=col-2>");
                    //Show the rating of the gif
                    var rating = results[i].rating;
                    //Show the name of the gif
                    var title = results[i].title
                    //Add the result or value of the rating and title in our HTML 
                    var TitleText = $("<h3 class=card-text allign>").text(title);
                    var ratingText = $("<h5>").text("Rating: " + rating);

                    //Create and image that has the source of that particular url
                    var gifImg = $("<img>");
                    gifImg.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(ratingText);
                    gifDiv.prepend(gifImg);
                    gifDiv.prepend(TitleText);
                    

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
        //Clear the document when loaded
        $("#images").empty();
        console.log(this)
        var userGif = $(this).attr("data-gif");
        console.log(this)
        var queryURLuser = "https://api.giphy.com/v1/gifs/search?q=" +
        userGif + "&api_key=EGOEsx7oEvGNmXEIBBfiQzAhbKu7dngF&limit=12";
        //Using Jquery to call the Api
        $.ajax({
            url: queryURLuser,
            method: "GET"
        }).then(function (response) {
            console.log(results)

            var results = response.data;

            
            //Create a For loop that will create results
            for (var i = 0; i < results.length; i++) {
                //Create a div that will contain the gif
                var gifDivUser = $("<div class=col-2 gifDisplay>");
                //Show the name of the gif
                var title = results[i].title
                //Show the rating of the gif
                var rating = results[i].rating;
                ///Add the result or value of the rating and title in our HTML 
                var TitleText = $("<h3 class=card-text allign>").text(title);
                var ratingText = $("<h5>").text("Rating: " + rating);
                

                //Create and image that has the source of that particular url
                var gifImg = $("<img>");
                gifImg.attr("src", results[i].images.fixed_height.url);

                gifDivUser.prepend(ratingText);
                gifDivUser.prepend(gifImg);
                gifDivUser.prepend(TitleText);

                $("#images").prepend(gifDivUser);
            }
        })
    }

    $(document).on("click", ".gifButton", displayGIF);


});


