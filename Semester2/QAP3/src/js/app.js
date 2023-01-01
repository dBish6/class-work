/*      QAP 3
 * Please update the following with your information:
 *
 *      Name:       <David_Bishop>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <Mar 28, 2022>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function eventHandler() {
  let output = "";
  categories.forEach(function (a) {
    output += `<button id=${a.id}>${a.name}</button> `;
  });
  document.querySelector("#menu").innerHTML = output;

  const defaultProducts = document.querySelector("#category-products");

  defaultProducts.innerHTML = `
    <tr id="p1">
      <td>Thrive Logo Black</td>
      <td>Our Signature Deck, Red Logo on a Black Deck - 8.0", 8.125"</td>
      <td>$89.99</td>
    </tr>
    <tr id="p2">
      <td>Enjoy Panda Logo White</td>
      <td>Enjoy's classic panda logo on a white deck - 8.25"</td>
      <td>$69.99</td>
    </tr>
    <tr id="p3">
      <td>Chocolate Carlisle Aikens</td>
      <td>Carlisle Aikens OG Chunk Chocolate Deck - 8.0"</td>
      <td>$89.99</td>
    </tr>
    <tr id="p4">
      <td>Element Tony Hawk</td>
      <td>Element's Tony Hawk Signature Deck - 8.5"</td>
      <td>$89.99</td>
    </tr>
    <tr id="p6">
      <td>Bones Rodney Mullen</td>
      <td>Legendary Rodney Mullen's Signature Bones Deck - 7.0"</td>
      <td>$89.99</td>
    </tr>
    <tr id="p7">
      <td>Girl Sean Malto Mint Green</td>
      <td>Sean Malto's 93 Til Pop Secret Girl Deck - 7.75", 8.0"</td>
      <td>$89.99</td>
    </tr>
    <tr id="p8">
      <td>Girl Infinity Yellow</td>
      <td>Girl Infinity Design Logo on a Yellow Deck - 8.0", 8.25"</td>
      <td>$69.99</td>
    </tr>
    <tr id="p9">
      <td>Illegal Civ Zach Saraceno White</td>
      <td>Illegal Civ Zach Saraceno Pro Deck - 8.0"</td>
      <td>$79.99</td>
    </tr>`;

  var def = document.querySelectorAll("td");

  def.forEach(function (a) {
    a.addEventListener("click", function () {
      console.log("Default products has been clicked!");
    });
  });
}
window.onload = eventHandler();

// for (var i = 0; i < btn.length; i++) {
//   console.log(i);
//   btn[i].addEventListener("click", function () {
//     console.log("clicked!");
//     let selCat = categories.name;

//     selCat = document.querySelector("#selected-category").innerHTML;
//   });
// }

// Button 1 Function
const btn1 = document.querySelector("#c1");

btn1.addEventListener("click", function () {
  let selCat = categories[0].name;

  document.querySelector("#selected-category").innerHTML = selCat;

  let filtered = products.filter((item) => {
    return item.categories == "c1" && item.discontinued === false;
  });
  console.log(filtered);

  let output = "";
  filtered.forEach(function (a) {
    let price = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
      a.price / 100
    );
    output += `<tr id="${a.id}"><td>${a.title}</td><td>${a.description}</td><td>${price}</td></tr>`;
    document.querySelector("#category-products").innerHTML = output;
  });

  filtered.forEach(function (a) {
    var click = document.getElementById(a.id);
    click.addEventListener("click", function () {
      console.log("Category1 products has been clicked!");
    });
  });
});

// Button 2 Function
const btn2 = document.querySelector("#c2");

btn2.addEventListener("click", function () {
  let selCat = categories[1].name;

  document.querySelector("#selected-category").innerHTML = selCat;

  let filtered = products.filter((item) => {
    return item.categories == "c2" && item.discontinued === false;
  });
  console.log(filtered);

  let output = "";
  filtered.forEach(function (a) {
    let price = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
      a.price / 100
    );
    output += `<tr id="${a.id}"><td>${a.title}</td><td>${a.description}</td><td>${price}</td></tr>`;
    document.querySelector("#category-products").innerHTML = output;
  });

  filtered.forEach(function (a) {
    var click = document.getElementById(a.id);
    click.addEventListener("click", function () {
      console.log("Category2 products has been clicked!");
    });
  });
});

// Button 3 Function
const btn3 = document.querySelector("#c3");

btn3.addEventListener("click", function () {
  let selCat = categories[2].name;

  selCat = document.querySelector("#selected-category").innerHTML = selCat;

  let filtered = products.filter((item) => {
    return item.categories == "c3" && item.discontinued === false;
  });
  console.log(filtered);

  let output = "";
  filtered.forEach(function (a) {
    let price = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
      a.price / 100
    );
    output += `<tr id="${a.id}"><td>${a.title}</td><td>${a.description}</td><td>${price}</td></tr>`;
    document.querySelector("#category-products").innerHTML = output;
  });

  filtered.forEach(function (a) {
    var click = document.getElementById(a.id);
    click.addEventListener("click", function () {
      console.log("Category3 products has been clicked!");
    });
  });
});

// Button 4 Function
const btn4 = document.querySelector("#c4");

btn4.addEventListener("click", function () {
  let selCat = categories[3].name;

  selCat = document.querySelector("#selected-category").innerHTML = selCat;

  let filtered = products.filter((item) => {
    return item.categories == "c4" && item.discontinued === false;
  });
  console.log(filtered);

  let output = "";
  filtered.forEach(function (a) {
    let price = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(
      a.price / 100
    );
    output += `<tr id="${a.id}"><td>${a.title}</td><td>${a.description}</td><td>${price}</td></tr>`;
    document.querySelector("#category-products").innerHTML = output;
  });

  filtered.forEach(function (a) {
    var click = document.getElementById(a.id);
    click.addEventListener("click", function () {
      console.log("Category4 products has been clicked!");
    });
  });
});
