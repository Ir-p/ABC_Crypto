// Call cryptocurrency API price
async function getPrice() {
  var api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const response = await fetch(api_url);
  const apiData = await response.json();
  var cryptoData = [];
  var baseUrl = "https://www.coingecko.com/en/coins/";
  // console.log(apiData);

  // Loop for top 10 cryptocurrencies
  for (let i=0;i<10;i++) {
    var coinName = apiData[i].name;
    var coinSymbol = apiData[i].symbol;
    var currentPrice = apiData[i].current_price;
    var priceChange24h = apiData[i].price_change_percentage_24h;
    var priceChangeBGColor = "";
    var createRow = document.getElementById("crypto").insertRow();
    var imageUrl = apiData[i].image;
    var graphNo = imageUrl.split('/')[5];
    var coinUrl = baseUrl + coinName.toLowerCase();

    if (priceChange24h < 0) {
      priceChangeBGColor = "#dc3545";}    
    else if (priceChange24h > 0) 
      {priceChangeBGColor = "#28a745";}      
    else priceChangeBGColor = "#000000";

    // Create new row for every new cryptocurrency on Top 10 list
    createRow.innerHTML += `
    <tr>
      <td><a href=${coinUrl} target=_blank><img src=${imageUrl} width=5%> ${coinName} (${coinSymbol})</a></td>
      <td><b>$ ${currentPrice}</b></td>
      <td><font color=${priceChangeBGColor}>${priceChange24h} % </td>
      <td><a href=${coinUrl} target=_blank><img class="" alt="bitcoin (BTC) 7d chart" data-src="https://www.coingecko.com/coins/${graphNo}/sparkline" data-srcset="https://www.coingecko.com/coins/${graphNo}/sparkline 1x" src="https://www.coingecko.com/coins/${i}/sparkline" srcset="https://www.coingecko.com/coins/${graphNo}/sparkline 1x"></a></td>
    </tr>`;
  }
}

getPrice();
document.addEventListener("load", getPrice);