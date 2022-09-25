// Animation
/* Getting the element with the id of preloader and assigning it to the variable loader. */
const loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const mybutton = document.getElementById("myBtn");
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var header = document.getElementById("navbar-nav");
var btn = header.getElementsByClassName("nav-item");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    console.log('cl');
    
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  btns[i].className += "active";
  });
}
