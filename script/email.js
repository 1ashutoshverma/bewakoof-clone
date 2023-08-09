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
  var users = JSON.parse(localStorage.getItem("user"));

  if (users) {
    console.log(users);
    var username;
    var saveemail;
    var num;
    for (var i = 0; i < users.length; i++) {
      var element = users[i];
      if (userObj.email == element.email && userObj.pass == element.password) {
        element.status = "loggedIn";
        username = element.name;
        saveemail = element.email;
        num = element.mobile;
      } else {
        element.status = "loggedOff";
      }
      console.log(element.mail, element.password);
    }
    if (username) {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("email", JSON.stringify(saveemail));
      localStorage.setItem("mobile", JSON.stringify(num));
      window.location.href = "index.html";
    } else {
      alert("Wrong Email or Password");
    }
  } else {
    console.error(`No data found in local storage for key 'user'`);
  }
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
