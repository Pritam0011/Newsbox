function remPlace() {
	document.querySelectorAll(".card-real").forEach((v) => {
		v.classList.remove("card-hide");
	});
	document.querySelectorAll(".card-place").forEach((v) => {
		v.classList.add("card-hide");
	});
}
function remPlaceStart() {
	console.log("working...");

	setTimeout(() => {
		document.querySelectorAll(".card-real").forEach((v) => {
			v.classList.remove("card-hide");
		});
		document.querySelectorAll(".card-place").forEach((v) => {
			v.classList.add("card-hide");
		});
	}, 5000);
}
remPlaceStart();

//////
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
