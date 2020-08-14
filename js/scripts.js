// Programming language options:
//   JavaScript
//   Ruby
//   C++
//   Python

$(document).ready(function(){
  $("form#answers").submit(function(){
    const question1 = parseInt($("input:radio[name=experience]:checked").val());
    const question2 = parseInt($("input:radio[name=concepts]:checked").val());
    const question3 = parseInt($("input:radio[name=subject]:checked").val());
    const question4 = parseInt($("input:radio[name=genre]:checked").val());
    const question5 = parseInt($("input:radio[name=vacation]:checked").val());

    const final = question1 + question2 + question3 + question4 + question5;

    if (final < 4){
      $("#result-python").fadeIn();
      $("#result-c").hide();
      $("#result-ruby").hide();
      $("#result-javascript").hide();
      $("#result-card").fadeIn();
    } else if (4 <= final && final < 8){
      $("#result-python").hide();
      $("#result-c").hide();
      $("#result-ruby").hide();
      $("#result-javascript").fadeIn();
      $("#result-card").fadeIn();
    } else if (8 <= final && final < 12){
      $("#result-python").hide();
      $("#result-c").fadeIn();
      $("#result-ruby").hide();
      $("#result-javascript").hide();
      $("#result-card").fadeIn();
    } else if (final >= 12){
      $("#result-python").hide();
      $("#result-c").hide();
      $("#result-ruby").fadeIn();
      $("#result-javascript").hide();
      $("#result-card").fadeIn();
    }
    $("html, body").animate({scrollTop: $("html, body").get(0).scrollHeight}, 500); 
    event.preventDefault();
  });
});