// PORTADA CARROUSEL

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

    }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



// GALLERY

// var galleryIndex = 0;
// gallery();
//
// function plusDivs(n) {
//   showDivs(galleryIndex += n);
// }
//
// function gallery() {
//   var i;
//   var x = document.getElementsByClassName("galleryImage");
//   for (var i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   galleryIndex++;
//   if (myIndex > x.length) {myIndex=1;}
//   x[myIndex-1].style.display = "block";
//   setTimeout(gallery, 3000)
// }


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("galleryImage");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// BURGER menu
//
// var menu = document.getElementsByClassName("burgerButton");
// menu.addEventListener(click, burguerButton(){
//     menu.style.display = "none";
// });
// var burgerButton = document.getElementsByClassName("burgerButton");
// burgerButton(){
//   burgerButton.style.display = "none";
// }

var burgerButton = document.getElementById("burgerButton");
var exitButton = document.getElementById("exitButton");
var menuResponsiveContainer = document.getElementById("menuResponsiveContainer");
function changeButton(){
  burgerButton.classList.toggle('active');
  exitButton.classList.toggle('active');
  menuResponsiveContainer.classList.toggle('menuOpen');
  // exitButton.style.display = "block";
};
