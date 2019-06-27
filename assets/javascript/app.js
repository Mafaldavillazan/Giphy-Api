
//TO DOS
//

//when the document is ready...



//USER INPUTS


//create an array to store the user input
var arrUserGif = []
console.log(arrUserGif)


//BUTTONS PRELOAD
//When any of the buttons preload is clicked ...

$(".definedButton").on("click", function () {

    //Taking the value giving to that button in the HTML
    var typeOfGif = $(this).attr("data-science")
    console.log(typeOfGif)
    //Add the link needed for calling the API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        typeOfGif + "&api_key=EGOEsx7oEvGNmXEIBBfiQzAhbKu7dngF&limit=10"

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
                var gifDiv = $("<div class=col-3>");
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


//USER BUTTONS
//Create a function that displays the user info in a button


//Create a function that will display the gifs
function displayUserGif() {
    var gif = $(this).attr("data-gif");
    var queryURLuser = "https://api.giphy.com/v1/gifs/search?q=" +
        userGif + "&api_key=EGOEsx7oEvGNmXEIBBfiQzAhbKu7dngF&limit=10";
    //Using Jquery to call the Api
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        //Create a div that will contain the gif
        var gifDivUser = $("<div class=col-3>");
        //Show the rating of the gif
        var rating = results[i].rating;
        //Add the result or value of the rating in our HTML 
        var ratingText = $("<p>").text("Rating: " + rating);

        //Create and image that has the source of that particular url
        var gifImg = $("<img>");
        gifImg.attr("src", results[i].images.fixed_height.url);

        gifDivUser.prepend(ratingText);
        gifDivUser.prepend(gifImg);

        $("#images").prepend(gifDiv);

    })
}

//Export the data the user types and add it to the new button
$("#add-gif").on("click", function (event) {
    event.preventDefault();

    // Grab the input from the form
    var userGifText = $("#gif-input").val().trim();
    console.log(userGifText)
    arrUserGif.push(userGifText);
  
    //Create user button
    var $userButton = $("<button>");
    $userButton.addClass("gif");
    $userButton.attr("data-gif",userGifText);
    $userButton.text(userGifText);
    $("#userButtons").append($userButton);
})
