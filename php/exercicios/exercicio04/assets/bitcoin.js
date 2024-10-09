const bitcoinSection = document.querySelector(".bitcoin");
setInterval(() => {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
        .then((response) => {
            response.json()
                .then((bitcoin) => {
                    console.log(bitcoin.symbol, bitcoin.price);
                    bitcoinSection.textContent = `${bitcoin.symbol} ${bitcoin.price}`;
                });
        });
}, 5000);