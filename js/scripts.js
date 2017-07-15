function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = "";
}

Pizza.prototype.cost = function(price) {
  return basePrice + toppings;
}


$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("input[name=size]:checked").val();
    var basePrice = "";
    if (inputtedSize === "small") {
      basePrice = "10";
    } else if (inputtedSize === "medium") {
      basePrice = "15";
    } else {
      basePrice = "20";
    }
    //alert(basePrice);
    $("#topping").each(function() {
      var toppings = "";
      if (inputtedSize === "small") {
        toppings = "2.50";
      } else if (inputtedSize === "medium") {
        toppings = "2.75";
      } else {
        toppings = "3"
      }
      //newOrder.toppings.push(price)
      alert(toppings);
    })

    var inputtedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var orderToppings = $(this).val();
      inputtedToppings.push(toppings);
    });
    var newOrder = new Pizza (basePrice + inputtedToppings.length * toppings);
    //alert(inputtedToppings);

    newOrder.cost.push(price);

    $("#receipt").show();


  });
});
