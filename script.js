var modal = document.querySelector(".modal");
var btn = document.querySelector("#openModal");
var close = document.querySelector(".close-modal");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}