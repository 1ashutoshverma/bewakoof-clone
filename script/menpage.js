var menPageData = [
  {
    img: "https://images.bewakoof.com/t640/conquer-strip-half-sleeve-t-shirt-black-300965-1656141795-1.jpg",
    brand: "Bewakoof",
    name: "Conquer Strip Half Sleeve T-Shirts Black",
    price: "499",
    disPrice: "299",
    color: "black",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t640/men-s-full-sleeve-t-shirts-1094-1672036930-1.jpg",
    brand: "Bewakoof",
    name: "Men's Full Sleeve T-Shirts",
    price: "1199",
    disPrice: "349",
    color: "black",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-oversized-solid-t-shirt-580070-1686200770-1.jpg",
    brand: "Bewakoof",
    name: "Men's Blue Oversized T-shirt",
    price: "899",
    disPrice: "396",
    color: "blue",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/blue-vibes-half-sleeve-t-shirt-black-298517-1679048700-1.jpg",
    brand: "Bewakoof",
    name: "Men's Black Blue Vibes Graphic Printed T-shirt",
    price: "1099",
    disPrice: "499",
    color: "black",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-yellow-tropical-vibes-graphic-printed-plus-size-t-shirt-590294-1688027787-1.jpg",
    brand: "Bewakoof",
    name: "Men's Yellow Tropical Vibes Graphic Printed Plus Size T-shirt",
    price: "1799",
    disPrice: "599",
    color: "yellow",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/bubble-gum-three-panel-color-block-t-shirt-360703-1670935043-1.jpg",
    brand: "Bewakoof",
    name: "Men's Green & Blue Color Block T-shirt",
    price: "1299",
    disPrice: "399",
    color: "blue",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/pageant-blue-candy-block-half-sleeve-t-shirt-333629-1656184267-1.jpg",
    brand: "Bewkoof",
    name: "Pageant Blue Candy Block Half Sleeve T-shirt",
    price: "1399",
    disPrice: "399",
    color: "blue",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-blue-slim-fit-t-shirt-587063-1680783354-1.jpg",
    brand: "Rigo",
    name: "Men's Blue Slim Fit T-shirt",
    price: "1299",
    disPrice: "389",
    color: "blue",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-yellow-graphic-printed-slim-fit-t-shirt-604067-1689839127-1.jpg",
    brand: "Rigo",
    name: "Men's Yellow Graphic Printed Slim Fit T-shirt",
    price: "999",
    disPrice: "354",
    color: "yellow",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-blue-graphic-printed-oversized-t-shirt-602868-1688740605-1.jpg",
    brand: "Snitch",
    name: "Men's Blue Graphic Printed Oversized T-shirt",
    price: "1998",
    disPrice: "999",
    color: "blue",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-black-printed-slim-fit-t-shirt-604049-1689838828-1.jpg",
    brand: "Rigo",
    name: "Men's Black Printed Slim Fit T-shirt",
    price: "999",
    disPrice: "349",
    color: "black",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-blue-graphic-printed-oversized-t-shirt-602869-1688740780-1.jpg",
    brand: "Snitch",
    name: "Men's Blue Graphic Printed Oversized T-shirt",
    price: "1998",
    disPrice: "999",
    color: "blue",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-yellow-slim-fit-shirt-4mss1944-05-603251-1689228720-1.jpg",
    brand: "Snitch",
    name: "Men's Yellow Slim Fit Shirt",
    price: "2398",
    disPrice: "1199",
    color: "yellow",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-black-striped-slim-fit-shirt-4mss159105-603086-1689162197-1.jpg",
    brand: "Snitch",
    name: "Men's Black Striped Slim Fit Shirt",
    price: "2598",
    disPrice: "1299",
    color: "black",
    pagelink: "#",
  },
  {
    img: "https://images.bewakoof.com/t1080/men-s-blue-all-over-printed-slim-fit-t-shirt-538076-1661409025-1.jpg",
    brand: "Rigo",
    name: "Men's Blue All Over Printed Slim Fit T-shirt",
    price: "999",
    disPrice: "379",
    color: "blue",
    pagelink: "#",
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

    pagelink.setAttribute("href", ele.pagelink);
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
