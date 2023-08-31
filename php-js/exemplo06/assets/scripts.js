
const url = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';

async function bitcoinPrice () {
    fetch(url).then(response => {
        response.json().then(data => {
            console.log(data);
        })
    });
}

setInterval(bitcoinPrice,5000);
