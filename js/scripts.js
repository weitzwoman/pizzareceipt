$(document).ready(function() {
  $("form").submit(function(event) {
    var personName = $("input#fullname").val();
    $(".first").text(personName);
    var address = $("input#address").val();
    $(".second").text(address);
    var pizza = $("#pizza").val();
    $(".third").text(pizza);
    $(".jumbotron").show();
    event.preventDefault();
  });
});
