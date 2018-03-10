$(function () {

  $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/maxcoin/',
    dataType: 'json',
    success: function (data) {
      var price = Number(data[0].price_usd).toFixed(3);
  	  var pricebtc = Number(data[0].price_btc).toFixed(8);
      var hourChanges = data[0].percent_change_1h;
      var dayChanges =  data[0].percent_change_24h;
      var weekChanges = data[0].percent_change_7d;

      // var dayChanges = 10;

      $('#topbar').prepend(`USD: ${price} `);
	    $('#headerbar').prepend(`USD: Hourly: ${hourChanges}% | 24H: ${dayChanges}% | Weekly: ${weekChanges}%`);
      $('#newbar').prepend(`BTC: ${pricebtc}`)

      if (dayChanges > .50) {
        $('#image').append(`<img border="2" style="width:300px; height:168px; border-color:green;" src="Images/max-up.gif"></img>`);
      }
      else if (dayChanges < -.50) {
        $('#image').append(`<img border="2" style="width: 300px; height=168px; border-color: red;" src="Images/max-down.gif"></img>`);
      }
      else {
        $('#image').append(`<img border="2" style="width:300px; height:168px;" border-color: black;" src="Images/max-stable.gif"></img>`);
      }

      console.log(price);
      console.log(dayChanges);
    }
  });
})
