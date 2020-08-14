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
      $("#result-python").show();
      $("#result-c").hide();
      $("#result-ruby").hide();
      $("#result-javascript").hide();
    } else if (4 <= final && final < 8){
      $("#result-python").hide();
      $("#result-c").hide();
      $("#result-ruby").hide();
      $("#result-javascript").show();
    } else if (8 <= final && final < 12){
      $("#result-python").hide();
      $("#result-c").show();
      $("#result-ruby").hide();
      $("#result-javascript").hide();
    } else {
      $("#result-python").hide();
      $("#result-c").hide();
      $("#result-ruby").show();
      $("#result-javascript").hide();
    }
    event.preventDefault();
  });
});