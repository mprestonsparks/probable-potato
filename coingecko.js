
// call functions
getData();


// declare array of tokens to return data for
var coin = [
    "bitcoin",
    "ethereum",
];


// -------------------------------------------------
// ** WRAP THE WHOLE FUNCTION IN THIS CALLBACK
=const slowAndSteady = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Slow and steady wins the race.');
        resolve();
    }, 5000);
});
slowAndSteady
    .then(function() {
        console.log('The last shall be the first!');
    });
// -------------------------------------------------


// get data from Coingecko API
async function getData(coin) { 
    
    // ** FIX ** 
    // the getData() function only works when the coin array is defined within the function
    // get it to work with the global coin array
    var coin = [
        "bitcoin",
        "ethereum",
    ];

    for (var i = 0; i < coin.length; i++) {
        // const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin';
        const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + coin[i];
        const response = await fetch(api_url);
        // response from API call is stored as 'data'
        const data = await response.json();
        console.log(data);
        updateTable(data);

    };

};

// add JSON data to table HTML
function updateTable(data) {

    // ** FIX ** 
    // the getData() function only works when the coin array is defined within the function
    // get it to work with the global coin array
    var coin = [
        "bitcoin",
        "ethereum",
    ];

    for (var i = 0; i < coin.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].symbol + "</td>");
        tr.append("<td>" + data[i].current_price + "</td>");
        $('table').append(tr);
    };
};