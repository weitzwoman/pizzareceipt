$(document).ready(function() {
  $("form").submit(function(event) {
    var personName = $("input#fullname").val();
    var address = $("input#address").val();
    var pizza = $("#pizza").val();

    $(".first").text(personName);
    $(".second").text(address);
    $(".third").text(pizza);
    $(".jumbotron").show();
    event.preventDefault();
  });
});
