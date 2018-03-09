$(function () {


 $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/maxcoin/?convert=GBP',
    dataType: 'json',
    success: function (data) {
      var price = Number(data[0].price_gbp).toFixed(2);

      // var dayChanges = 10;
	  
      $('#topbar').prepend(`Price: ${price} GBP | `); 
	  
      console.log(price);
    }
  });
})
