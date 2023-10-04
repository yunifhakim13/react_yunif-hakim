document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const tableBody = document.getElementById("userData");
  const savedUserData = JSON.parse(localStorage.getItem("userData")) || [];
  function updateTable() {
    tableBody.innerHTML = "";
    savedUserData.forEach(function (userData, index) {
      const newRow = document.createElement("tr");

      newRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${userData.firstName}</td>
        <td>${userData.lastName}</td>
        <td>${userData.username}</td>
        <td>${userData.email}</td>
        <td>${userData.gender}</td>
        <td>${userData.address}</td>
        <td>${userData.address2}</td>
        <td>${userData.nationality}</td>
        <td>${userData.languages.join(", ")}</td>
      `;
      tableBody.appendChild(newRow);
    });
  }

  updateTable();
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("validationCustom01").value;
    const lastName = document.getElementById("validationCustom02").value;
    const username = document.getElementById("validationCustomUsername").value;
    const email = document.getElementById("validationCustom03").value;
    const gender = document.querySelector(
      'input[name="radio-stacked"]:checked'
    ).value;
    const address = document.getElementById("validationCustom05").value;
    const address2 = document.getElementById("validationCustom06").value;
    const nationality = document.getElementById("validationCustom04").value;
    const languages = [];
    document
      .querySelectorAll('input[type="checkbox"]:checked')
      .forEach(function (checkbox) {
        languages.push(checkbox.nextSibling.textContent.trim());
      });

    const userData = {
      firstName,
      lastName,
      username,
      email,
      gender,
      address,
      address2,
      nationality,
      languages,
    };

    savedUserData.push(userData);

    localStorage.setItem("userData", JSON.stringify(savedUserData));

    updateTable();

    form.reset();
  });
});
