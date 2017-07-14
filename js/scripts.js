function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = "";
}

Pizza.prototype.cost = function(price) {
  this.cost += price;
}






$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var order = new Pizza ($("#price").val());
    var inputtedSize = $("#size").val();
    var inputtedToppings = $("#topping").val();

    $("#receipt").show();

  });
});
