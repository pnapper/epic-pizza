function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = "";
}

var basePrice = "";
var toppings = "";
var inputtedToppings = [];

Pizza.prototype.cost = function() {
  return basePrice + toppings * inputtedToppings.length;
}


$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("input[name=size]:checked").val();

    if (inputtedSize === "small") {
      basePrice = 10;
    } else if (inputtedSize === "medium") {
      basePrice = 15;
    } else {
      basePrice = 20;
    }
    alert(basePrice);

      if (inputtedSize === "small") {
        toppings = 2.50;
      } else if (inputtedSize === "medium") {
        toppings = 2.75;
      } else {
        toppings = 3;
      }
      alert(toppings);

    $("input:checkbox[name=topping]:checked").each(function(){
      var orderToppings = $(this).val();
      inputtedToppings.push(orderToppings);
      console.log(inputtedToppings);

    var newOrder = new Pizza (basePrice, orderToppings, price);
    console.log(newOrder.cost());

    newOrder.cost(newOrder);
    $("#price").text(newOrder.price);

    $("#receipt").show();
    });
  });
});
