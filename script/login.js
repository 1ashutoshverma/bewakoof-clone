var data = JSON.parse(localStorage.getItem("user")) || [];
// console.log(data.mobile);
let mobile_login;
let login_btn = document.querySelector("#login");
login_btn.addEventListener("click", function (event) {
  mobile_login = document.querySelector("#mobile").value;
  login();
});

let check = document.querySelector("#mobile");
check.addEventListener("input", function (event) {
  count();
});

document.querySelector("#email").addEventListener("click", function (event) {
  window.location.href = "email.html";
});

function login() {
  if (document.querySelector("#mobile").value == data.mobile) {
    window.location.href = "email.html";
  } else if (mobile_login.length == 10) {
    window.location.href = "signup.html";
  } else {
    document.querySelector("#valid-num").innerText =
      "Mobile Number is required";
    // document.querySelector("#login").style.marginTop = "35px";
    document.querySelector("#input-div").style.border = "1px solid red";
    // document.querySelector("#valid-num").style.marginLeft = "-47%";
  }
}

function count() {
  console.log(document.querySelector("#valid-num").value);
  document.querySelector("#valid-num").innerText = null;
  document.querySelector("#login").style.marginTop = "20px";
  document.querySelector("#input-div").style.border = "1px solid #aaaaaa";
}
