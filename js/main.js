//wait for the DOM elements to load before executing
$(document).ready(function() {
    $('#submit-btn').click(function (event) {
    //prevent the submit button from refreshing the page
        event.preventDefault();
    //get the value of the #city-type input and correct for capitalization
        var city = $('#city-type').val();

    // if the user inputs New York City / NYC / New York change the body class to 'nyc'
        if (city == 'New York' || city == 'New York City' || city == "NYC") {
            $('body').addClass('nyc');
        }
    // if the user inputs SF/San Francisco/Bay Area change the body class to 'sf'
        if (city == 'SF' || city == 'San Francisco' || city == 'Bay Area') {
            $('body').addClass('sf');
        }
    // if the user inputs Austin/ATX change the body class to 'austin'
        if (city == 'Austin' || city == 'ATX') {
            $('body').addClass('austin');
        }
    // if the user inputs Los Angeles/LA/LAX change the body class to 'la'
        if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
            $('body').addClass('la');
        }
    // if the user inputs Sydney/SYD change the body class to 'sydney'
        if (city == 'Sydney' || city == 'SYD') {
            $('body').addClass('sydney');
        }
    });
                      
    $('#submit-btn').on('submit', city);                      
});