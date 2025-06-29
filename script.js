var floatingInput = document.getElementById("floatingInput");
var floatingPassword = document.getElementById("floatingPassword");
var tablecontainer = document.getElementById("tablecontainer");

var allusers = [];

function adduser() {
  var user = {
    URL: floatingPassword.value,
    name: floatingInput.value,
  };

  if (user.name.trim() !== "" && user.URL.trim() !== "") {
    allusers.push(user);
    floatingInput.value = "";
    floatingPassword.value = "";
    displayusers();
  }
}

function displayusers() {
  var carton = "";
  for (var i = 0; i < allusers.length; i++) {
    carton += `
      <tr>
        <td>${i + 1}</td>
        <td>${allusers[i].name}</td>
        <td>
          <a href="${allusers[i].URL}" target="_blank" class="btn btn-warning text-white">
            <div class="d-flex align-items-center">
              <i class="bi bi-box-arrow-up-right"></i>
              <span class="ms-1">Visit</span>
            </div>
          </a>
        </td>
        <td>
          <button class="btn btn-danger" onclick="deleteUser(${i})">
            <div class="d-flex align-items-center">
              <i class="bi bi-trash"></i>
              <span class="ms-1">Delete</span>
            </div>
          </button>
        </td>
      </tr>
    `;
  }
  tablecontainer.innerHTML = carton;
}

function deleteUser(index) {
  allusers.splice(index, 1);
  displayusers();
}
