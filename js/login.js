const loginForm = document.getElementById("login-page");
const email = document.getElementById("email");
const password = document.getElementById("password");


// const USERS_URL = "http://localhost:3000/users";
const USERS_URL = "https://my-json-server.typicode.com/dbStoreForProjects/CooperData1/users";
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


if (isLoggedIn) {
  showUserInfo();
} else {
  // showLoginForm();
  console.log("error");
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = email.value;
  const passwordInput = password.value;

  fetch(USERS_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // const users = data.users;
      const user = data.find(
        (u) => u.email === emailInput && u.password === passwordInput
      );
      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(user));

        showUserInfo();
      } else {
        alert("Invalid username or password");
      }
    });
});

function showUserInfo() {
  console.log("Ok");
  const user = JSON.parse(localStorage.getItem("userData"));
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  const newPageUrl = "profile.html";
  window.location.href = newPageUrl;
}


