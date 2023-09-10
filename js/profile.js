document.addEventListener("DOMContentLoaded", function () {
  const userInfo = document.querySelector(".informations");
  const form = document.querySelector("#user-details-form");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    const {
      name,
      surname,
      phone,
      email,
      country,
      city,
      address,
      password,
      image,
    } = loggedInUser;

    let date = new Date();
    let today = date.getHours();
    let greetings = "";
    if (today < 12) {
      greetings = `<h4 class="greetings">Sabahınız Xeyir!</h4>`;
    } else if (today > 12 && today <= 16) {
      greetings = `<h4 class="greetings">Günortanız Xeyir!</h4>`;
    } else {
      greetings = `<h4 class="greetings">Axşamınız Xeyir!</h4>`;
    }
    // console.log(today);
    userInfo.innerHTML = `
      <div class="alert-image">
        <div class="success-image info">
          <i class="fa-solid fa-check"></i>
          <h5>Data yadda saxlanıldı</h5>
        </div>
        <div class="error-image info">
          <i class="fa-solid fa-xmark"></i>
          <h5>Data yadda saxlanmadı</h5>
        </div>
      </div>
      <div class="header">
        <div class="left">
          <img src=${image} alt="" />
        </div>
        <div class="right">
          ${greetings}
          <h4 class="username">${name} ${surname}</h4>
          <div class="img-upload">
            <i class="fa-solid fa-download"></i>
            <span>Şəkil əlavə edin </span>
            <span class="format">(jpeg, png)</span>
          </div>
        </div>
      </div>
      <div class="details">
        <form class="form" id="user-details-form">
          <div class="col">
            <input
              type="tel"
              name="phone"
              id="phone"
              value="${phone}"
            />
            <input
              type="email"
              name="email"
              id="email"
              value="${email}"
            />
            <input
              type="text"
              name="country"
              id="country"
              value="${country}"
            />
          </div>
          <div class="col">
            <input
              type="text"
              name="city"
              id="city"
              value="${city}"
            />
            <input
              type="text"
              name="street"
              id="street"
              value="${address}"
            />
          </div>
        </form>
      </div>
  
      <div class="details">
        <h1 class="sub-title">Şifrə</h1>
        <form class="form">
          <div class="col">
            <div class="password">
              <input
                type="password"
                name="password"
                id="password"
                value="${password}"
              />
              <i id="showPassword" class="fa-regular fa-eye-slash password-eye"></i>
            </div>
          </div>
          <div class="col">
            <a href="#" class="nav-btn">Parolu dəyişdirin</a>
          </div>
        </form>
      </div>
      <div class="details">
        <h1 class="sub-title">Ödəniş forması</h1>
        <form class="form user">
          <div class="col">
            <div class="col card-front">
              <input
                type="text"
                name="credit-card"
                id="credit-card"
                placeholder="5115 5555 5555 5555"
              />
              <i class="fa-regular fa-credit-card"></i>
            </div>
  
            <div class="col card-back">
              <input
                type="number"
                name="date"
                id="card-date"
                placeholder="07/24"
              />
              <input
                type="number"
                name="cvv"
                id="cvv"
                placeholder="CVV"
              />
            </div>
          </div>
          <div class="col">
            <a href="#" class="nav-btn">Yadda saxla</a>
          </div>
        </form>
      </div>
            `;
    const showPassword = document.querySelector("#showPassword");
    const passwordInp = document.querySelector("#password");
    showPassword.addEventListener("click", (e) => {
      e.preventDefault();
      const type =
        passwordInp.getAttribute("type") === "password" ? "text" : "password";
      passwordInp.setAttribute("type", type);
      showPassword.classList.toggle("fa-eye");
    });
  }
});


const logoutButton = document.getElementById("logoutBtn");
logoutButton.addEventListener("click", function () {
  localStorage.clear();
  const newPageUrl = "login.html";
  window.location.href = newPageUrl;
});
