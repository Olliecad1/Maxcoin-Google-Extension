$(function () {


 $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/maxcoin/?convert=GBP',
    dataType: 'json',
    success: function (data) {
      var price_gbp = Number(data[0].price_gbp).toFixed(3);


      $('#topbar').prepend(`GBP: ${price_gbp}`);

      console.log(price);
    }
  });
})
