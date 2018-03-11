$(function () {


 $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/maxcoin/?convert=EUR',
    dataType: 'json',
    success: function (data) {
      var price_eur = Number(data[0].price_eur).toFixed(3);


      $('#topbar').prepend(`EURO: ${price_eur} | `);

      console.log(price);
    }
  });
})
