var countDownDate = new Date("Dec 15, 2017 00:00:00").getTime();

  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days.toString().length === 1) {
      days = '0' + days;
    }
    if (hours.toString().length === 1) {
      hours = '0' + hours;
    }
    if (minutes.toString().length === 1) {
      minutes = '0' + minutes;
    }
    if (seconds.toString().length === 1) {
      seconds = '0' + seconds;
    }

    document.getElementById("timer").innerHTML = days + " d. " + hours + " h. "
    + minutes + " m. " + seconds + " s.";


    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

$(function() {
  $('.fa').click(function() {
    $('nav').toggle('slideDown');
  });
});
