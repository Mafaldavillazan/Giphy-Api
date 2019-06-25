//Add the information of bootstrap/ Jquery and API
//Code of Api for FILMS of adding buttons follow the same path
//Get first button to work
// Add the adding button with the categories needed

//Add the function for on click for the buttons
//Can we make the code better with when the user clicks on any button take that info

//MOON
$("#moon-button").on("click", function () {
    //Add the link needed for calling the API
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=moon";

    //Using Jquery to call the Apo
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response)

            //taking from that response just what we want
            var imageUrl = response.data.fixed_width_small_url;
            // creates an 
            var moonImage = $("<img>");

            // we are setting src attribute to the image we are looking for
            moonImage.attr("src", imageUrl);

            // adding the image to the div image
            $("#images").prepend(moonImage);
        });

})