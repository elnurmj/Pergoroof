function openNav() {
  document.getElementById("mySidebar").style.width = "264px";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("main").style.marginLeft = "264px";
  document.getElementById("navbar").style.marginLeft = "264px";
  document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("navbar").style.marginLeft = "0";
  document.getElementById("openbtn").style.display = "block";
}