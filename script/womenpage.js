var menPageData = [
  {
    img: "https://images.bewakoof.com/t1080/women-s-blue-typography-slim-fit-t-shirt-604043-1689839689-1.jpg",
    brand: "Rigo",
    name: "Women's Blue Typography Slim Fit T-shirt",
    price: "999",
    disPrice: "299",
    color: "blue",
  },
  {
    img: "https://images.bewakoof.com/t1080/imperial-red-v-neck-varsity-rib-t-shirt-272308-1660312337-1.jpg",
    brand: "Bewakoof",
    name: "Imperial Red V-Neck Varsity Rib T-shirt",
    price: "699",
    disPrice: "299",
    color: "red",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-blue-welcome-to-the-real-world-friends-graphic-printed-oversized-t-shirt-597965-1690468433-1.jpg",
    brand: "Bewakoof",
    name: "Women's Blue Welcome To The Real World (Friends) Graphic Printed Oversized T-shirt",
    price: "1249",
    disPrice: "699",
    color: "blue",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-being-cute-is-my-super-power-printed-t-shirt-2-577439-1676020309-1.jpg",
    brand: "Bewakoof",
    name: "Women's Red Being Cute Is My Superpower Graphic Printed T-Shirt",
    price: "999",
    disPrice: "299",
    color: "red",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-black-bunny-rabbit-pocket-slim-fit-t-shirt-248178-1655813664-1.jpg",
    brand: "Snitch",
    name: "Women's Black Bunny Rabbit Pocket Slim Fit T-shirt",
    price: "549",
    disPrice: "299",
    color: "black",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-yellow-hope-need-graphic-printed-t-shirt-594662-1685972822-1.jpg",
    brand: "Bewakoof",
    name: "Women's Yellow Hope Need Typography T-shirt",
    price: "000",
    disPrice: "349",
    color: "yellow",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-black-too-high-typography-oversized-t-shirt-501871-1667491031-1.jpg",
    brand: "Bewakoof",
    name: "Women's Black Too High Typography Oversized T-shirt",
    price: "1299",
    disPrice: "399",
    color: "black",
  },
  {
    img: "https://images.bewakoof.com/t1080/simplicity-daisy-half-sleeve-printed-t-shirt-bold-red-296559-1656109688-1.jpg",
    brand: "Snitch",
    name: "Women's Red Simplicity Daisy Typography Slim Fit T-shirt",
    price: "899",
    disPrice: "299",
    color: "red",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-blue-welcome-to-the-real-world-friends-graphic-printed-oversized-t-shirt-597965-1690468433-1.jpg",
    brand: "Bewakoof",
    name: "Women's Blue Welcome To The Real World (Friends) Graphic Printed Oversized T-shirt",
    price: "1249",
    disPrice: "699",
    color: "blue",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-black-cuteness-spell-graphic-printed-boyfriend-t-shirt-503832-1655815550-1.jpg",
    brand: "Snitch",
    name: "Women's Black Cuteness Spell Graphic Printed Boyfriend T-shirt",
    price: "999",
    disPrice: "499",
    color: "black",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-maroon-typography-slim-fit-t-shirt-604045-1689839557-1.jpg",
    brand: "Rigo",
    name: "Women's Maroon Typography Slim Fit T-shirt",
    price: "999",
    disPrice: "299",
    color: "red",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-yellow-tie-dye-slim-fit-co-ordinates-608345-1691498234-1.jpg",
    brand: "Rigo",
    name: "Women's Yellow Tie & Dye Slim Fit Co-ordinates",
    price: "2198",
    disPrice: "1318",
    color: "yellow",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-blue-all-over-polka-printed-slim-fit-co-ordinates-wtrkst1018-608336-1691498118-1.jpg",
    brand: "Rigo",
    name: "Women's Blue All Over Polka Printed Slim Fit Co-ordinates",
    price: "1799",
    disPrice: "1079",
    color: "blue",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-blue-dreamer-t-shirt-295742-1655748135-1.jpg",
    brand: "Bewakoof",
    name: "Women's Blue Dreamer Slim Fit T-shirt",
    price: "1099",
    disPrice: "359",
    color: "blue",
  },
  {
    img: "https://images.bewakoof.com/t1080/women-s-black-watermelon-sugar-graphic-printed-boyfriend-t-shirt-546549-1682403846-1.jpg",
    brand: "Bewakoof",
    name: "Women's Black Watermelon Sugar Graphic Printed Boyfriend T-shirt",
    price: "999",
    disPrice: "499",
    color: "black",
  },
];

updateCart(menPageData);
function updateCart(arr) {
  arr.forEach((ele) => {
    //Make divs and all
    let mainDiv = document.createElement("div");
    let pagelink = document.createElement("a");
    let bottomdiv = document.createElement("div");
    let leftDiv = document.createElement("div");
    let rightDiv = document.createElement("div");
    let img = document.createElement("img");
    let brand = document.createElement("p");
    let name = document.createElement("p");
    let disPrice = document.createElement("span");
    let price = document.createElement("span");
    let tribe = document.createElement("p");
    let cotton = document.createElement("p");
    let like = document.createElement("img");
    //Assign values

    pagelink.setAttribute("href", "#");
    img.setAttribute("src", ele.img);
    brand.textContent = ele.brand;
    name.textContent = ele.name;
    disPrice.textContent = `₹${ele.disPrice}`;
    price.textContent = ele.price;
    tribe.textContent = "₹399 For TriBe Members";
    cotton.textContent = "100% COTTON";
    like.setAttribute("src", "./navbar/ic-web-head-wishlist.svg");

    //counting
    document.querySelector("#counting span").textContent = `(${arr.length})`;

    //append
    leftDiv.append(brand, name, disPrice, price, tribe, cotton);
    rightDiv.append(like);
    bottomdiv.append(leftDiv, rightDiv);
    mainDiv.append(img, bottomdiv);
    pagelink.append(mainDiv);
    document.querySelector("#products").append(pagelink);

    mainDiv.addEventListener("click", () => {
      localStorage.setItem("product", JSON.stringify(ele));
      window.location.href = "./product-M-desc.html";
      // console.log(ele);
    });
  });
}

var colorFilter = document.querySelector("#color_filter");
var brandFilter = document.querySelector("#brand_filter");
var sort = document.querySelector("#sort select");
colorFilter.addEventListener("change", (el) => {
  let value = colorFilter.value;
  //   console.log(value);
  if (value == "") {
    document.querySelector("#products").innerHTML = "";
    updateCart(menPageData);
  } else {
    let fil = menPageData.filter((element) => {
      return element.color == value;
    });
    document.querySelector("#products").innerHTML = "";
    updateCart(fil);
  }
});

brandFilter.addEventListener("change", (el) => {
  let value = brandFilter.value;
  //   console.log(value);
  if (value == "") {
    document.querySelector("#products").innerHTML = "";
    updateCart(menPageData);
  } else {
    let fil = menPageData.filter((element) => {
      return element.brand == value;
    });
    document.querySelector("#products").innerHTML = "";
    updateCart(fil);
  }
});

var sortArr = [...menPageData];

sort.addEventListener("change", () => {
  let value = sort.value;
  if (value == "") {
    document.querySelector("#products").innerHTML = "";
    updateCart(menPageData);
  } else if (value == "high_low") {
    sortArr.sort((a, b) => {
      if (Number(a.disPrice) > Number(b.disPrice)) {
        return -1;
      } else {
        return 1;
      }
    });
    document.querySelector("#products").innerHTML = "";
    updateCart(sortArr);
  } else if (value == "low_high") {
    sortArr.sort((a, b) => {
      if (Number(a.disPrice) > Number(b.disPrice)) {
        return 1;
      } else {
        return -1;
      }
    });
    document.querySelector("#products").innerHTML = "";
    updateCart(sortArr);
  }
});
