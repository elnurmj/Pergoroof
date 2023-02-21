let popup = document.getElementById("popup");


function openPopup(){
  popup.classList.add("open-popup");
  document.getElementById("blur").style.filter = "blur(10px)"
  document.getElementById("blur").style.background = "rgba(26, 24, 24, 0.4);"
}

function closePopup(){
  popup.classList.remove("open-popup");
  document.getElementById("blur").style.filter = "none"
}