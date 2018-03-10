$(function () {


 $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/maxcoin/?convert=ETH',
    dataType: 'json',
    success: function (data) {
      var price_eth = Number(data[0].price_eth).toFixed(8);

      $('#newbar').prepend(`ETH: ${price_eth}`);

      console.log(price);
    }
  });
})
