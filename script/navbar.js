//for women
let cartQuantity = JSON.parse(localStorage.getItem("cart")) || [];
var cartquantity = document.querySelectorAll(".cart-quantity");
let quant = 0;
cartQuantity.forEach((ele) => {
  quant += Number(ele.quantity);
});
cartquantity.forEach((ele) => {
  ele.textContent = quant;
});
var womenData = [
  [
    "Topwear",
    "Printed T-Shirts",
    "Boyfriend T-Shirts",
    "Oversized T-Shirts",
    "Plain T-Shirts",
    "Full Sleeve T-Shirts",
    "Half Sleeve T-Shirts",
    "3/4 Sleeve T-Shirts",
    "Fashin Tops",
    "Kurtis",
    "Shirts",
    "Co-ord Sets",
    "Dresses",
    "Kurtas",
    "Henleys",
    "Plus Size Topwear",
    "Jackets",
    "SweatShirts & Hoodies",
    "Sweaters",
    "Customize T-shirts",
    "T-shirt Combos",
    "All Topwear",
  ],
  [
    "Bottomwear",
    "Joggers",
    "Pyjamas",
    "Shorts",
    "Jeans & Denims",
    "Boxers Shorts",
    "Trousers & Pants",
    "Plus Size Bottomwear",
    "All Bottomwear",
  ],
  [
    "Winterwear",
    "Sweatshirts & Hoodies",
    "Sweaters",
    "Full Sleeve T-Shirts",
    "Jackets",
    "Joggers",
    "Plus Size",
  ],
  ["Accessories", "Mobile Covers", "Backpacks", "Caps"],

  ["Footwear", "Clogs", "Casual Shoes", "Socks", "Sliders"],
  ["Plussize", "Topwear", "Bottomwear", "Winter Wear", "Dresses"],
  ["Indian Wear", "Kurtis", "Kurta Pyjama Sets"],
  ["Loungewear", "Shorts", "Payjamas", "Lounge Wear", "Boxers"],
];

localStorage.setItem("FemaleWear", JSON.stringify(womenData));

updateDropDown(womenData);
function updateDropDown(arr) {
  //creating elements
  let main_div = document.createElement("div");
  for (let i = 0; i < arr.length; i++) {
    let divElement = document.createElement("div");
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      if (j == 0) {
        let p = document.createElement("h5");
        p.textContent = arr[i][j];
        divElement.appendChild(p);
      } else {
        let p = document.createElement("p");
        p.textContent = arr[i][j];
        divElement.appendChild(p);
      }
    }
    main_div.appendChild(divElement);
  }
  // console.log(document.querySelector("#dropdown_menu_women"));
  // console.log(document.querySelector("#dropdown_menu_women"));
  document.querySelector("#dropdown_menu_women").append(main_div);
}

let women = document.querySelector("#nav2 > div > div span:nth-child(2)");
women.addEventListener("mouseover", () => {
  document.querySelector("#dropdown_menu_women").style.display = "block";
  document.querySelector(
    "#nav2 > div > div span:nth-child(2) a"
  ).style.borderBottom = "3px solid #fdd835";
});
women.addEventListener("mouseout", () => {
  document.querySelector("#dropdown_menu_women").style.display = "none";
  document.querySelector(
    "#nav2 > div > div span:nth-child(2) a"
  ).style.borderBottom = "";
});
document
  .querySelector("#dropdown_menu_women")
  .addEventListener("mouseover", () => {
    document.querySelector("#dropdown_menu_women").style.display = "block";
    document.querySelector(
      "#nav2 > div > div span:nth-child(2) a"
    ).style.borderBottom = "3px solid #fdd835";
  });
document
  .querySelector("#dropdown_menu_women")
  .addEventListener("mouseout", () => {
    document.querySelector("#dropdown_menu_women").style.display = "none";
    document.querySelector(
      "#nav2 > div > div span:nth-child(2) a"
    ).style.borderBottom = "";
  });

//For Men
var menData = [
  [
    "Topwear",
    "Printed T-Shirts",
    "Oversized T-Shirts",
    "Plain T-Shirts",
    "Fashion T-Shirts",
    "Full Sleeve T-Shirts",
    "Half Sleeve T-Shirts",
    "Shirts",
    "Vests",
    "Co-ord Sets",
    "Kurtas",
    "Henleys",
    "Plus Size Topwear",
    "Polo T-Shirts",
    "Jackets",
    "SweatShirts & Hoodies",
    "Sweaters",
    "Customize T-shirts",
    "T-shirt Combos",
    "All Topwear",
  ],
  [
    "Bottomwear",
    "Joggers",
    "Pyjamas",
    "Shorts",
    "Jeans & Denims",
    "Boxers",
    "Briefs",
    "Trousers & Pants",
    "Plus Size Bottomwear",
    "All Bottomwear",
  ],
  ["Accessories", "Mobile Covers", "Backpacks", "Caps"],
  [
    "Winterwear",
    "Sweatshirts & Hoodies",
    "Jackets",
    "Sweaters",
    "Joggers",
    "Full Sleeve T-Shirts",
    "Plus Size",
  ],
  ["Footwear", "Sliders", "Clogs", "Casual Shoes", "Socks"],
  ["Plussize", "T-shirts", "Bottomwear", "Kurtas"],
  ["Indian Wear", "Kurtas"],
  ["Innerwear & Loungewear", "Vests", "Boxers", "Trunks", "Men's Briefs"],
];

localStorage.setItem("MaleWear", JSON.stringify(menData));
var men_style = document.querySelector("#dropdown_menu_men");
updateDropDownMen(menData);
function updateDropDownMen(arr) {
  //creating elements
  let main_div = document.createElement("div");
  for (let i = 0; i < arr.length; i++) {
    const divElement = document.createElement("div");
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      if (j == 0) {
        let p = document.createElement("h5");
        p.textContent = arr[i][j];
        divElement.appendChild(p);
      } else {
        let p = document.createElement("p");
        p.textContent = arr[i][j];
        divElement.appendChild(p);
      }
    }
    main_div.appendChild(divElement);
  }
  men_style.append(main_div);
}

let men = document.querySelector("#nav2 > div > div span:nth-child(1)");
men.addEventListener("mouseover", () => {
  men_style.style.display = "block";
  document.querySelector(
    "#nav2 > div > div span:nth-child(1)>a"
  ).style.borderBottom = "3px solid #fdd835";
});
men.addEventListener("mouseout", () => {
  men_style.style.display = "none";
  document.querySelector(
    "#nav2 > div > div span:nth-child(1)>a"
  ).style.borderBottom = "";
});

men_style.addEventListener("mouseover", () => {
  men_style.style.display = "block";
  document.querySelector(
    "#nav2 > div > div span:nth-child(1)>a"
  ).style.borderBottom = "3px solid #fdd835";
});

men_style.addEventListener("mouseout", () => {
  men_style.style.display = "none";
  document.querySelector(
    "#nav2 > div > div span:nth-child(1)>a"
  ).style.borderBottom = "";
});

//for Mobile
var mobileData = [
  ["Nothing", "Nothing Phone 1"],
  ["Xiaomi", "Poco X4 Pro 5G", "Poco M4 5G", "Poco M4 Pro 5G"],
  ["Oneplus", "OnePlus Nord 2T 5G", "OnePlus 9R", "OnePlus Nord N20 SE"],
  ["Apple", "iPhone 13", "iPhone 14 Pro Max", "iPhone 14 Pro"],
  [
    "Samsung",
    "Samsung Galaxy S21 FE 5G",
    "Samsung Galaxy S20 FE",
    "Samsung Galaxy Note 10 lite",
  ],
  ["Real me", "Realme 10 Pro+ 5G", "Realme 10 Pro 5G", "Realme 8 5G"],
  ["Vivo", "Vivo v25 Pro", "Vivo S1", "Vivo iQOO 11"],
  ["OTHER BRANDS", "Oppo", "Huawei", "Moto"],
];

localStorage.setItem("MaleWear", JSON.stringify(mobileData));
var mobile_style = document.querySelector("#dropdown_menu_mobile");
updateDropDownMobile(mobileData);
function updateDropDownMobile(arr) {
  //creating elements
  let main_div = document.createElement("div");
  for (let i = 0; i < arr.length; i++) {
    const divElement = document.createElement("div");
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j]);
      if (j == 0) {
        let p = document.createElement("h5");
        p.textContent = arr[i][j];
        divElement.appendChild(p);
      } else {
        let p = document.createElement("p");
        p.textContent = arr[i][j];
        divElement.appendChild(p);
      }
    }
    main_div.appendChild(divElement);
  }
  mobile_style.append(main_div);
}

let mobile = document.querySelector("#nav2 > div > div span:nth-child(3)");
mobile.addEventListener("mouseover", () => {
  mobile_style.style.display = "block";
  document.querySelector(
    "#nav2 > div > div span:nth-child(3)>a"
  ).style.borderBottom = "3px solid #fdd835";
});
mobile.addEventListener("mouseout", () => {
  mobile_style.style.display = "none";
  document.querySelector(
    "#nav2 > div > div span:nth-child(3)>a"
  ).style.borderBottom = "";
});

mobile_style.addEventListener("mouseover", () => {
  mobile_style.style.display = "block";
  document.querySelector(
    "#nav2 > div > div span:nth-child(3)>a"
  ).style.borderBottom = "3px solid #fdd835";
});

mobile_style.addEventListener("mouseout", () => {
  mobile_style.style.display = "none";
  document.querySelector(
    "#nav2 > div > div span:nth-child(3)>a"
  ).style.borderBottom = "";
});

var left_menu = document.querySelector("#left_menu");
left_menu.addEventListener("mouseover", () => {
  document.querySelector("body").style.display = "absolute";
  document.querySelector("body").style.opacity = "1";
});
var hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  left_menu.style.display = "flex";
  document.querySelector("#cover").style.display = "block";
});
var hamburger = document.querySelector("#left_menu_top span");
hamburger.addEventListener("click", () => {
  left_menu.style.display = "";
  document.querySelector("#cover").style.display = "none";
});

var login_data = JSON.parse(localStorage.getItem("user")) || [];
console.log(login_data);
updateLogin(login_data);

function updateLogin(abc) {
  if (abc.status == "loggedIn") {
    document.querySelector("#humanicon").style.display = "flex";
    // document.querySelector("#login_a").style.display = "none";
    document.querySelector("#phone_login").textContent = abc.name;
    document.querySelector("#laptop_login").textContent = abc.name;
  } else {
    document.querySelector("#login_a").style.display = "flex";
    document.querySelector("#humanicon").style.display = "none";
    document.querySelector(
      "#phone_login"
    ).innerHTML = `<a href="login.html" style="background-color: white;">Login</a>`;
    document.querySelector("#logout_mobile").innerHTML = "";
  }
}
const log = document.getElementById("main_login_dropdown");
var logoutButton = document.querySelector("#logout_button");
logoutButton.addEventListener("click", () => {
  login_data.status = "loggedOut";
  updateLogin(login_data);
  localStorage.setItem("user", JSON.stringify(login_data));
  loginDropdown.style.display = "none";
});
var logoutmobile = document.querySelector("#logout_mobile");
logoutmobile.addEventListener("click", () => {
  login_data.status = "loggedOut";
  updateLogin(login_data);
  localStorage.setItem("user", JSON.stringify(login_data));
});

// Get the login button and the dropdown content
const loginButton = document.getElementById("login_button");
const loginDropdown = document.getElementById("login_dropdown");

// Show the dropdown when login button is clicked
loginButton.addEventListener("mouseover", () => {
  loginDropdown.style.display = "block";
});
loginButton.addEventListener("mouseout", () => {
  loginDropdown.style.display = "none";
});

log.addEventListener("mouseover", () => {
  loginDropdown.style.display = "block";
});
log.addEventListener("mouseout", () => {
  loginDropdown.style.display = "none";
});
