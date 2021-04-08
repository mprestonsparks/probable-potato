// declare array of tokens to return data for
var coin = [
    "bitcoin",
    "ethereum",
];

// call function to make API request
getData(coin);
console.log(coin);

// SAMPLE CODE FOR ASYNC/TIMING ERRORS
// const slowAndSteady = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Slow and steady wins the race.');
//         resolve();
//     }, 5000);
// });
// slowAndSteady
//     .then(function() {
//         console.log('The last shall be the first!');
//     });


// get data from Coingecko API

async function getData(coin) { 
    const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + coin;
    const response = await fetch(api_url);
    // response from API call is stored as 'data'
    const data = await response.json();
    console.log(data);
    updateTable(data);
};

// *** BROKEN ***
// add JSON data to HTML table
function updateTable(data) {
        tr = $('<tr/>');
        tr.append("<td>" + data.symbol + "</td>");
        tr.append("<td>" + data.current_price + "</td>");
        $('table').append(tr);
};