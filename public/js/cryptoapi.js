// Call cryptocurrency API price
async function getPrice() {
  var api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const response = await fetch(api_url);
  const apiData = await response.json();
  var cryptoData = [];

  // Loop for top 10 cryptocurrencies
  for (let i=0;i<10;i++) {
    var coinName = apiData[i].name;
    var coinSymbol = apiData[i].symbol;
    var currentPrice = apiData[i].current_price;
    var priceChange24h = apiData[i].price_change_percentage_24h;
    var priceChangeBGColor = "";
    var createRow = document.getElementById("crypto").insertRow();

    if (priceChange24h < 0) {
      priceChangeBGColor = "#FF0000";}    
    else if (priceChange24h > 0) 
      {priceChangeBGColor = "#00FF00";}      
    else priceChangeBGColor = "#000000";

    // Create new row for every new cryptocurrency on Top 10 list
    createRow.innerHTML += `
    <tr>
      <td>${coinName} (${coinSymbol})</td>
      <td><b>$ ${currentPrice}</b></td>
      <td><font color=${priceChangeBGColor}>${priceChange24h} % </td>
    </tr>`;
  }
}

getPrice();