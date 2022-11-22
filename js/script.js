// Set the date we're counting down to
var countDownDate = new Date("Nov 24, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = hours + " часов "
  + minutes + " минут " + seconds + " секунд ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

new TradingView.widget(
  {
  "width": 980,
  "height": 610,
  "symbol": "NYSE:JNJ",
  "interval": "D",
  "timezone": "Europe/Moscow",
  "theme": "light",
  "style": "1",
  "locale": "ru",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "withdateranges": true,
  "allow_symbol_change": true,
  "save_image": false,
  "show_popup_button": true,
  "popup_width": "1000",
  "popup_height": "650",
  "locale": "en",
  "container_id": "tradingview_274f2"
}
  );
