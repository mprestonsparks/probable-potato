
// get data from Coingecko API
getData();
async function getData() {
    const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin'
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
};

//Insert data function to table
function Insert_Data() {
    var table = document.getElementById("myTable");
    var rows = table.querySelectorAll('tr');
    console.log(rows)
    for (let i = 1; i < rows.length; i++) {
        rows[i].children[0].textContent = a[i-1].name
        rows[i].children[1].textContent = a[i-1].age
        rows[i].children[2].textContent = a[i-1].hometown
    }
};

// placeholder table
var a = [
    {
        name: "Micheal",
        age: 20,
        hometown: "New York"
    },
    {
        name: "Santino",
        age: 25,
        hometown: "Los Angeles"
    },
    {
        name: "Fredo",
        age: 29,
        hometown: "California"
    },
    {
        name: "Hagen",
        age: 28,
        hometown: "Long Beach"
    }
];