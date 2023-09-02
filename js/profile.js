const USERS_URL = "https://my-json-server.typicode.com/incihuseynli/json_example/users";

const headerInfo = document.querySelector(".informations .header");
const form = document.querySelector("#user-details-form");

fetch(USERS_URL)
    .then(response => {
        return response.json();
    }).then(users => {
            const data = `
            <div class="left" <data id="1" />>
            <img src=${users.image} alt="" />
          </div>
          <div class="right">
            <h4 class="greetings">Günortanız Xeyir!</h4>
            <h4 class="username">${users.name} ${users.surname}</h4>
            <div class="img-upload">
              <i class="fa-solid fa-download"></i>
              <span>Şəkil əlavə edin </span>
              <span class="format">(jpeg, png)</span>
            </div>
          </div>
          `;
          headerInfo.innerHTML += data;
          const formData = `
          <div class="col">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Əlaqə nömrəniz"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail ünvanınız"
                  />
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Ölkə"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Şəhər"
                  />
                  <input
                    type="text"
                    name="street"
                    id="street"
                    placeholder="St. Şevçenko"
                  />
                </div>
          `;
        });
    });