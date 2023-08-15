var bag = JSON.parse(localStorage.getItem("cart")) || [];
var data = JSON.parse(localStorage.getItem("product"));

let photo = document.querySelector("#photo > img");
let brand = document.querySelector("#brand_name");
let productName = document.querySelector("#product_name");
let disPrice = document.querySelector("#disPrice");
let price = document.querySelector("#price");
let percentage = document.querySelector("#percentage");

photo.src = data.img;
brand.textContent = data.brand;
productName.textContent = data.name;
price.textContent = data.price;
disPrice.textContent = data.disPrice;

document.querySelector("#main_container > p > span").textContent = data.name;
let per = Math.round(100 - (Number(data.disPrice) / Number(data.price)) * 100);
console.log(per);
percentage.textContent = `${per}% off`;

document.querySelector("#add_to_cart").addEventListener("click", (ele) => {
  let existingItem = bag.find((item) => item.name === data.name);
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    data.quantity = 1;
    bag.push(data);
  }
  let quant = 0;
  bag.forEach((ele) => {
    quant += Number(ele.quantity);
  });
  var cartquantity = document.querySelectorAll(".cart-quantity");
  cartquantity.forEach((ele) => {
    ele.textContent = quant;
  });
  // alert("Product Added to Cart");
  localStorage.setItem("cart", JSON.stringify(bag));
});

let desc_plus = document.querySelector("#desc_plus");
let description = document.querySelector("#description");
desc_plus.addEventListener("click", () => {
  if (desc_plus.textContent == "+") {
    desc_plus.textContent = "-";
    description.style.display = "block";
  } else {
    desc_plus.textContent = "+";
    description.style.display = "";
  }
});

let return_plus = document.querySelector("#return_plus");
let Return = document.querySelector("#Return");
return_plus.addEventListener("click", () => {
  if (return_plus.textContent == "+") {
    return_plus.textContent = "-";
    Return.style.display = "block";
  } else {
    return_plus.textContent = "+";
    Return.style.display = "";
  }
});

let offer_plus = document.querySelector("#offer_plus");
let offer = document.querySelector("#offer");
offer_plus.addEventListener("click", () => {
  if (offer_plus.textContent == "+") {
    offer_plus.textContent = "-";
    offer.style.display = "flex";
  } else {
    offer_plus.textContent = "+";
    offer.style.display = "";
  }
});
