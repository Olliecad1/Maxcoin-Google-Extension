$(function () {

  $.ajax({
    type: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/maxcoin/',
    dataType: 'json',
    success: function (data) {
      var price = Number(data[0].price_usd).toFixed(2);
      var hourChanges = data[0].percent_change_1h;
      var dayChanges =  data[0].percent_change_24h;
      var weekChanges = data[0].percent_change_7d;

      // var dayChanges = 10;
	  
      $('#topbar').prepend(`Price: ${price} | Hourly: ${hourChanges}%`); 
	  $('#bottombar').prepend(`24H: ${dayChanges}% | Weekly: ${weekChanges}%`);

      if (dayChanges > .50) {
        $('#image').append(`<img border="10" style="width:300px; height:168px; border-color:green;" src="Images/max-up.gif"></img>`);
      }
      else if (dayChanges < -.50) {
        $('#image').append(`<img border="10" style="width: 300px; height=168px; border-color: red;" src="Images/max-down.gif"></img>`);
      }
      else {
        $('#image').append(`<img border="10" style="width:300px; height:168px;" border-color: black;" src="Images/max-stable.gif"></img>`);
      }

      console.log(price);
      console.log(dayChanges);
    }
  });
})
