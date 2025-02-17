var modal = document.getElementById("myModal");
var images = document.querySelectorAll(".grid-item img");
var modalImg = document.getElementById("modal-img");
var span = document.getElementsByClassName("close")[0];

images.forEach(image => {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {  // Click on the modal background to close
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
