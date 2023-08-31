// Agar form tidak reset saat di submit
document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // mengambil value dari input yang dipilih
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productSelect = document.getElementById("productSelect").value;
    const productRadio = document.getElementsByName("productRadio");
    const formFile = document.getElementById("formFile").value;
    const textArea = document.getElementById("textArea").value;

    // variabel yang berisi symbol
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
  });
