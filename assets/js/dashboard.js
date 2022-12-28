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




/*/
  const mySidebar = document.getElementById('mySidebar');
  const toggle = document.getElementById('toggle');

  document.onclick = function(e){
    if(e.target.id !== 'toggle' && e.target.id !== 'mySidebar')
    {
      toggle.classList.remove('active');
      mySidebar.classList.remove('active');
    }
  }


  toggle.onclick = function(){
    toggle.classList.toggle('active');
    mySidebar.classList.toggle('active');
  }
/*/
 
