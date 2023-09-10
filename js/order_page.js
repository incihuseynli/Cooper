const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const accountBox = document.querySelector(".account-box");
const customerInfo = document.querySelector("#customerInfo");
function showUserData(){
    if (loggedInUser) {
  const {
    name,
    surname,
    phone,
    email,
    country,
    city,
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
  accountBox.innerHTML = `
     
              <img src=${image} class="user-image" />
              <div class="texts">
                <h5>
                ${greetings}
                <h4 class="username">${name} ${surname}</h4>
                </h5>
                <span>Xoş alış-veriş!</span>
              </div>
      `;
      customerInfo.innerHTML = `
      <div class="header">
      <div class="rank">1</div>
      <h4>Şəxsi məlumat</h4>
    </div>
    <div class="details">
      <form class="form">
        <div class="col">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value="${name}"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            value="${phone}"
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
            name="lastname"
            id="lastname"
            value="${surname}"
          />
          <input
            type="email"
            name="email"
            id="email"
            value="${email}"
          />
          <input
            type="text"
            name="city"
            id="city"
            value="${city}"
          />
        </div>
      </form>
    </div>`;
} else {
  accountBox.innerHTML = `
    <i class="fa-regular fa-user"></i>
    <img src="./assets/images/person.png" class="user-image" />
    <div class="texts">
      <h5>
        Artıq hesabınız var və ya qeydiyyatdan keçmək istəyirsiniz?
      </h5>
      <span>Daxil olun və endirim əldə edin</span>
    </div>

    <div class="btns">
      <button class="btn"><a href="login.html">Giriş</a></button>
      <button class="btn btn-outline">
        <a href="register.html">Qeydiyyat</a>
      </button>
    </div>
    `;
}

}
showUserData();