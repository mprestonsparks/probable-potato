
var coin = [
    {"id":"bitcoin"},
    {"id":"ethereum"},    
];

getData();
// get data from Coingecko API
async function getData() {
        for (var i = 0; i < coin.length; i++) {
        
        // const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin';
        const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin';
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(coin[0].id)
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data[i].symbol + "</td>");
            tr.append("<td>" + data[i].ath + "</td>");
            $('table').append(tr);
        };
    };
};