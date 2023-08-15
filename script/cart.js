let data = JSON.parse(localStorage.getItem("cart")) || [];

let temp = JSON.parse(localStorage.getItem("user")) || {};
let sign_email = "";
if (Object.keys(temp).length === 0) {
  alert("First Login");
  window.location.replace("./login.html");
} else {
  sign_email = JSON.parse(localStorage.getItem("user")).email;
}
const updateCart = () => {
  localStorage.setItem("cart", JSON.stringify(data));
  window.location.reload();
};

const increaseQuantity = (index) => {
  data[index].quantity++;
  updateCart();
};

const decreaseQuantity = (index) => {
  if (data[index].quantity > 1) {
    data[index].quantity--;
  } else {
    removeproduct(index);
  }
  updateCart();
};

document.getElementById("sign-email").innerText = sign_email;
if (data.length == 0) {
  document.getElementById("empty-bag").style.display = "block";
  document.getElementById("main").style.display = "none";
} else {
  document.getElementById("main").style.display = "flex";
}
let check_add = JSON.parse(localStorage.getItem("address"));
if (check_add != null) {
  document.getElementById("address").style.display = "none";
  document.getElementById("continue").style.display = "block";
} else {
  document.getElementById("address").style.display = "block";
  document.getElementById("continue").style.display = "none";
}

const empty = () => {
  let image = document.createElement("img");
  image.src =
    "https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png";
  let p = document.createElement("p");
  p.innerText = "Nothing in the bag";
  let button = document.createElement("button");
  button.innerText = "Continue Shopping";
  button.onclick = () => {
    window.location.href = "index.html";
  };
  document.getElementById("empty-bag").append(image, p, button);
};
empty();
document.getElementById("length").innerText = data.length;

const appending = (data) => {
  let cont = document.getElementById("items");
  cont.innerHTML = null;
  data.forEach((element, index) => {
    let div = document.createElement("div");
    div.setAttribute("id", "box");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "second");

    let spec = document.createElement("div");
    spec.setAttribute("id", "price");

    let imagediv = document.createElement("div");
    imagediv.setAttribute("id", "img-div");

    let img = document.createElement("img");
    img.src = element.img;

    let p = document.createElement("p");
    p.innerText = element.name;

    let del = document.createElement("del");
    del.innerText = "₹" + element.price;
    del.style.color = "grey";

    let ins = document.createElement("ins");
    ins.innerText = "₹" + element.disPrice + " ";
    ins.style.textDecoration = "none";
    ins.style.fontSize = "20px";
    ins.style.fontWeight = "bold";

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.onclick = () => {
      removeproduct(index);
    };

    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity-div");

    let minusButton = document.createElement("button");
    minusButton.innerText = "-";
    minusButton.onclick = () => decreaseQuantity(index);

    let quantity = document.createElement("span");
    quantity.innerText = element.quantity;

    let plusButton = document.createElement("button");
    plusButton.innerText = "+";
    plusButton.onclick = () => increaseQuantity(index);

    quantityDiv.append(plusButton, quantity, minusButton);

    spec.append(p, ins, del);
    imagediv.append(img);
    div.append(spec, imagediv);
    div2.append(div, remove, quantityDiv);
    cont.append(div2);
  });
};

appending(data);
const removeproduct = (index) => {
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  window.location.reload();
  appending(data);
};
let sum = 0;
data.forEach((el) => {
  sum += Number(el.price) * Number(el.quantity);
});
document.getElementById("total").innerText = "₹ " + sum;
console.log(sum);
let bag_discount = 0;
let totalQuantity = 0;
data.forEach((el) => {
  bag_discount += Number(el.price - el.disPrice) * Number(el.quantity);
  totalQuantity += Number(el.quantity);
});
document.getElementById("off").innerText = "- ₹ " + bag_discount;
document.getElementById("save-span").innerText = "₹ " + bag_discount;
let final = 0;
data.forEach((el) => {
  final += Number(el.disPrice) * Number(el.quantity);
});
document.getElementById("final-price").innerText = "₹ " + final;
document.getElementById("span-price").innerText = "₹ " + final;
document.getElementById("address").onclick = () => {
  document.getElementById("address-div").style.backgroundColor = "white";
  document.getElementById("address-div").style.display = "block";
  document.getElementById("address-div").style.position = "absolute";
  document.getElementById("address-div").style.zIndex = "1";
  document.getElementById("address-div").style.top = "100px";
  document.getElementById("address-div").style.left = "300px";
  document.getElementById("main").style.opacity = "0.2";
};
document.getElementById("svad").onclick = () => {
  Addaddress();
  document.getElementById("address-div").style.display = "none";
  document.getElementById("main").style.display = "flex";
  window.location.reload();
};
document.getElementById("close").onclick = () => {
  document.getElementById("address-div").style.display = "none";
  document.getElementById("main").style.display = "flex";
  document.getElementById("main").style.opacity = "1";
};
let countr = (document.getElementById("country").value = " India");
const Addaddress = () => {
  let obj = {
    country: countr,
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    pin: document.getElementById("pin").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
  };
  localStorage.setItem("address", JSON.stringify(obj));
};
document.getElementById("continue").onclick = () => {
  let arr = [];
  data.forEach((el) => {
    arr.push(el.name);
  });
  let localaddress = JSON.parse(localStorage.getItem("address"));
  let obj1 = {
    fname: localaddress.name,
    lname: "Singh",
    number: localaddress.mobile,
    address: localaddress.city,
    price: `Rs ${sum}`,
    productName: arr,
    date: new Date().toLocaleString(),
  };
  console.log(obj1);
  localStorage.setItem("final", JSON.stringify(obj1));
  window.location.href = "payment.html";
};
document.getElementById("logo").onclick = () => {
  window.location.href = "index.html";
};
document.querySelector("#length").innerText = totalQuantity;
