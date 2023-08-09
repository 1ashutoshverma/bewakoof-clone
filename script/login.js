let mobile;
let login_btn = document.querySelector("#login");
login_btn.addEventListener("click", function (event) {
  mobile = document.querySelector("#mobile").value;
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
  if (mobile.length == 10) {
    localStorage.setItem("phone", mobile);
    window.location.href = "signup.html";
  } else {
    document.querySelector("#valid-num").innerText =
      "Please Enter a Valid Mobile Number";
    document.querySelector("#login").style.marginTop = "35px";
    document.querySelector("#input-div").style.border = "1px solid red";
    document.querySelector("#valid-num").style.marginLeft = "-47%";
  }
}

function count() {
  console.log(document.querySelector("#valid-num").value);
  document.querySelector("#valid-num").innerText = null;
  document.querySelector("#login").style.marginTop = "20px";
  document.querySelector("#input-div").style.border = "1px solid #aaaaaa";
}
