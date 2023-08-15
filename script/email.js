document
  .querySelector("#login-btn")
  .addEventListener("click", function (event) {
    userLogin();
  });
document.querySelector("#email").addEventListener("input", function (event) {
  check();
});
document.querySelector("#pass").addEventListener("input", function (event) {
  check();
});
function userLogin() {
  var userObj = {
    email: document.querySelector("#email").value,
    pass: document.querySelector("#pass").value,
  };
  if (userObj.email == "admin" && userObj.pass == "admin") {
    window.location.href = "admin.html";
  }
  var users = JSON.parse(localStorage.getItem("user")) || [];

  if (users) {
    console.log(users);
    if (userObj.email == users.email && userObj.pass == users.password) {
      users.status = "loggedIn";
      localStorage.setItem("user", JSON.stringify(users));
      window.location.href = "index.html";
    } else {
      alert("Wrong Email or Password");
    }
  } else {
    alert("New User - Sign Up First");
    window.location.href = "signup.html";
  }
  // console.error(`No data found in local storage for key 'user'`);
}
function check() {
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  if (email.length > 0 && pass.length > 0) {
    document.querySelector("#login-btn").style.backgroundColor = "#42a2a2";
  } else {
    document.querySelector("#login-btn").style.backgroundColor = "#989898";
  }
}
