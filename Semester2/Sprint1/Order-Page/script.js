var food_item = document.getElementById("food-item");
var confirm_button = document.getElementById("confirm-quantity");

function handleSelect(food_object, occurance) {
  var food_price = document.getElementsByClassName("food-price")[occurance];
  switch (food_object) {
    case "The Big Gary":
      food_price.innerHTML = `$${14.75}`;
      break;
    case "Regular Burger":
      food_price.innerHTML = `$${8.99}`;
      break;
    case "Classic Cheeseburger":
      food_price.innerHTML = `$${9.45}`;
      break;
    case "The Works Burger":
      food_price.innerHTML = `$${11.99}`;
      break;
    case "Chili Burger":
      food_price.innerHTML = `$${10.45}`;
      break;
    case "Juicy Lucy Burger":
      food_price.innerHTML = `$${10.75}`;
      break;
    case "Hot Dog":
      food_price.innerHTML = `$${8.75}`;
      break;
    case "Chili Dog":
      food_price.innerHTML = `$${9.75}`;
      break;
    case "Classic Fries":
      food_price.innerHTML = `$${3.75}`;
      break;
    case "Wings":
      food_price.innerHTML = `$${12.75}`;
      break;
    case "Nachos":
      food_price.innerHTML = `$${11.99}`;
      break;
    case "Mozza Sticks":
      food_price.innerHTML = `$${6.99}`;
      break;
    case "Scrambled Eggs":
      food_price.innerHTML = `$${7.55}`;
      break;
    case "Meat Omelette":
      food_price.innerHTML = `$${9.25}`;
      break;
    case "Veggie-Cheese Omelette":
      food_price.innerHTML = `$${8.99}`;
      break;
    case "Western Omelette":
      food_price.innerHTML = `$${8.99}`;
      break;
    case "Eggs on Toast":
      food_price.innerHTML = `$${6.99}`;
      break;
    case "Waffles":
      food_price.innerHTML = `$${7.99}`;
      break;
    case "Pancakes":
      food_price.innerHTML = `$${7.99}`;
      break;
    case "Breakfast Burrito":
      food_price.innerHTML = `$${9.99}`;
      break;
    case "Beverage":
      food_price.innerHTML = `$${1.25}`;
      break;
    case "Shake":
      food_price.innerHTML = `$${3.25}`;
      break;
    case "Cake":
      food_price.innerHTML = `$${4.25}`;
      break;
  }
}

function quantitySelect(num, occurance) {
  var food_price = document
    .getElementsByClassName("food-price")
    [occurance].innerHTML.replace("$", "");
  var food_total = document.getElementsByClassName("food-total")[occurance];
  total_cost = parseFloat(food_price, 10) * num;
  food_total.innerHTML = `$${total_cost.toFixed(2)}`;
}

function calcSubTotal() {
  sub_total = 0;
  for (i = 0; i <= 10; i++) {
    var item_cost = document
      .getElementsByClassName("food-total")
      [i].innerHTML.replace("$", "");
    sub_total += parseFloat(item_cost, 10);
  }

  // Accumulate new total amount and display results
  total = document.getElementById("subtotal");
  hst = document.getElementById("hst");
  order_total = document.getElementById("final-total");
  var hst_owing = sub_total * 0.15;
  var final_total = sub_total + hst_owing;
  total.innerHTML = `$${sub_total.toFixed(2)}`;
  hst.innerHTML = `$${hst_owing.toFixed(2)}`;
  order_total.innerHTML = `$${final_total.toFixed(2)}`;
}
