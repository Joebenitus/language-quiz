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

    $("#result-python").show();
    event.preventDefault();
  });
});