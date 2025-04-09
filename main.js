
console.log("HELLO")


const aboutbutton = document.querySelector("#about");


const cal = document.querySelector("#cal");


aboutbutton.onclick = gotoabout;
cal.onclick = gotocal;


function gotoabout()
{
	window.location.href = "abt.html"
}

function gotocal()
{
	window.location.href = "cal.html"
}

