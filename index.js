$(document).ready(function(){

    function calculator(){
      var sum = "";
      var screen;
      var inputVal = document.getElementById("screen");
      $(".buttons .digit").on('click', function() {
        var num = $(this).attr('value');
        sum += num;
        $("#screen").html(sum);
      screen = inputVal.innerHTML.split("");
  
      });
      $(".buttons .operator").on('click', function(e) {
        e.preventDefault();
        var ops = $(this).attr('value');
        sum += ops;
        $("#screen").html(sum);
         screen = inputVal.innerHTML;
  
      });
  
  
      $("#equal").on('click', function() {
        var total =  eval(sum);
        $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
      });
  
      $("#clear").on('click', function() {
         sum = "";
          $("#screen").html(0);
      });
  
      };
            calculator();
  });
  