const btnSubscribe = document.querySelector(".btn__subscribe");
btnSubscribe.addEventListener("click", (e) => {
  e.preventDefault();
  const yourName = document.getElementById("formName").value;
  const yourPhone = document.getElementById("formName").value;
  const textArea = document.getElementById("massage").value;
  alert(
    `form telah disubmit, nama ${yourName}, no telepon ${yourPhone}, dan pesan anda ${textArea}`
  );
});
