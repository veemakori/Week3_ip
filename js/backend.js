$(document).ready(function(){
    $("img#img-design").click(function(){
      $("p#design-dis").toggle();
      $("img#img-design").toggle();
    });
    $("img#img-dev").click(function(){
      $("p#dev-dis").toggle();
      $("img#img-dev").toggle();
    });

    $("img#img-product").click(function(){
        $("p#product-dis").toggle();
        $("img#img-product").toggle();
      });
      $("img#proj1").hover(function(){
        $("p#work1").show();
      });
      $("img#proj2").hover(function(){
        $("p#work2").show();
      });
      $("img#proj3").hover(function(){
        $("p#work3").show();
      });
      $("img#proj4").hover(function(){
        $("p#work4").show();
      });
      $("img#proj5").hover(function(){
        $("p#work5").show();
      });
$("img#proj6").hover(function(){
      $("p#work6").show();
    });
    $("img#proj7").hover(function(){
      $("p#work7").show();
    });
    $("img#proj8").hover(function(){
      $("p#work8").show();
    });
    // process user add in the contact us section
    $("#submit").click(function(){
      var nameInput = $("input#name").val();
      var emailInput = $("input#email").val();
      var textInput = $("input#text").val();
      alert("Hi "+ nameInput + ", we have received your message. Thank you for visiting our Studio").val();
  
    });
});