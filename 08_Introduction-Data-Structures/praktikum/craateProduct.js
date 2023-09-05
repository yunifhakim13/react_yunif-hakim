// Agar form tidak reset saat di submit
document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // agar penomoran dimulai dari 1 bukan 0
    let rowNumber = 1;

    // mengambil value dari input yang dipilih
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productSelect = document.getElementById("productSelect").value;
    const productRadio = document.getElementsByName("productRadio");
    const formFile = document.getElementById("formFile").value;
    const textArea = document.getElementById("textArea").value;
    const productCategory = document.getElementById("productSelect").value;
    const productImage = document.getElementById("formFile").value;
    const productFreshness = document.querySelector(
      'input[name="productRadio"]:checked'
    ).value;
    const productDescription = document.getElementById("textArea").value;
    const productForm = document.getElementById("productForm");
    const hasilTable = document.querySelector("table tbody");

    // select variabel yang berisi symbol
    const regex = /^[^@#{}]*$/;

    // melakukan validasi input productName & productPrice tidak boleh kosong
    if (productName.trim() === "" || productPrice.trim() === "") {
      alert("Product Name and Product Price are required.");
      return;
    }

    // melakukan validasi input productName tidak boleh melebihi 25 karakter
    if (productName.lenght > 25) {
      alert("Product Name must not exceed 25 characters.");
      return;
    }

    // melakukan validasi input productName tidak boleh berisi karakter symbol
    if (!regex.test(productName)) {
      alert("Name must not contain symbols.");
      return;
    }

    // melakukan validasi pada productSelect untuk memilih salah satu
    if (productSelect.trim() === "") {
      alert("The Product Category must be selected");
      return;
    }

    // melakukan validasi pada formFile tidak boleh kosong/ harus ada file
    if (formFile === "") {
      alert("The Image of Product must be filled in");
      return;
    }

    // melakukan validasi pada productRadio agar memilih salah satu
    let checked = false;
    for (let i = 0; i < productRadio.length; i++) {
      if (productRadio[i].checked) {
        checked = true;
        break;
      }
    }

    if (!checked) {
      alert("The product freshness must be selected");
      return;
    }
    // melakukan validasi agar textArea tidak boleh kosong
    if (textArea === "") {
      alert("The Additional Description must be filled in");
      return;
    }
    // memunculkan alert setelah berhasil input form
    alert("Product created successfully");

    // Buat baris baru dalam tabel hasil
    const newRow = hasilTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    // Isi sel-sel dengan data yang dimasukkan
    cell1.innerHTML = hasilTable.rows.length;
    cell2.innerHTML = productName;
    cell3.innerHTML = productCategory;
    cell4.innerHTML = productImage;
    cell5.innerHTML = productFreshness;
    cell6.innerHTML = productDescription;
    cell7.innerHTML = productPrice;

    // Reset formulir
    productForm.reset();
  });
