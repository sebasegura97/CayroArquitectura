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
