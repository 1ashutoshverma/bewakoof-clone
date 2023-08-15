let data = JSON.parse(localStorage.getItem("user")) || [];
document
  .querySelector("#proceed-btn")
  .addEventListener("click", function (event) {
    getData();
  });
document.querySelector("#name").addEventListener("input", function (event) {
  signup();
});
document.querySelector("#mobile").addEventListener("input", function (event) {
  signup();
});
document.querySelector("#email").addEventListener("input", function (event) {
  signup();
});
document.querySelector("#pass").addEventListener("input", function (event) {
  signup();
});

function signup() {
  let name = document.querySelector("#name").value;
  let mobile = document.querySelector("#mobile").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  if (
    name.length > 0 &&
    mobile.length == 10 &&
    email.length > 0 &&
    pass.length > 0
  ) {
    document.querySelector("#proceed-btn").style.backgroundColor = "#42a2a2";
  } else {
    document.querySelector("#proceed-btn").style.backgroundColor = "#989898";
  }
}
function getData() {
  if (document.querySelector("#mobile").value.length !== 10) {
    document.querySelector("#valid-num").innerText =
      "Please Enter a Valid Mobile Number";
    //document.querySelector("#login").style.marginTop = "9%";
    document.querySelector("#input-div").style.border = "2px solid red";
    document.querySelector("#mobile").style.borderBottom = "2px solid red";
    return;
  }
  var userObj = {
    name: document.querySelector("#name").value,
    mobile: document.querySelector("#mobile").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
    status: "loggedIn",
  };
  localStorage.setItem("user", JSON.stringify(userObj));
  window.location.href = "index.html";
}
