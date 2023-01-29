//BACK TO THE TOP SCRIPT
var mybutton = document.getElementById("backtotop");
var navbar = document.getElementById("title");

window.onscroll = function() {scrollFunction(),hidetitle()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//HIDE THE TITLE/LOGO WHEN THE USER SCROLLS
	function hidetitle() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			  navbar.style.display = "none";
			  navbar.style.transitionDelay = "all 2s";
			} 
			else {
			  navbar.style.display = "block";
			}
	}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
	
var tablinks = document.getElementByClassName("tablinks");
var tabcontents = document.getElementByClassName("tabcontents");

function opentab(tabname) {
	for(tablink of tablinks) {
		tablink.classList.remove("activelink");
	}
		for(tabcontent of tabcontents) {
		tabcontent.classList.remove("activetab");
	}
	event.currentTarget.classList.add("activelink");
	document.getElementById(tabname).classList.add("activetab");
}