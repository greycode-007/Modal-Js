
//  Get button
const btn = document.getElementById("button");

const closemodal = document.getElementById('closemodal')

//  Get modal 
const modal = document.getElementById("modal");


//  show modal onclick
btn.addEventListener('click', function() {
    document.getElementById("modal").style.display = "block";
});

// Close modal onclick
closemodal.addEventListener('click', function() {
    document.getElementById("modal").style.display = "none";
});



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}