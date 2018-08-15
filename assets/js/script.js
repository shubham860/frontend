/*SIDE NAVIGATION*/
var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", toggleMenu);


function toggleMenu(e) {

    var divOverlay = document.getElementsByClassName("overlay")[0];
    var speed = 10;


    var eventTarget = e.target;

    if( eventTarget.className == "btn-open" ) {
        fadeIn(divOverlay, speed);
        eventTarget.className = "btn-close";

    } else if ( eventTarget.className == "btn-close") {
        fadeOut(divOverlay, speed);
        eventTarget.className = "btn-open";
    }

}

function fadeIn(elem, speed) {

    var inInterval = setInterval(function(){

    elem.style.opacity = Number(elem.style.opacity) + 0.02;

    if (elem.style.opacity >= 1) {

        elem.style.opacity = 1;
        clearInterval(inInterval);

    }


    }, speed); // 10ms == .01s



}

function fadeOut(elem, speed) {

    var outInterval = setInterval(function(){

    elem.style.opacity = Number(elem.style.opacity) - 0.02;

    if (elem.style.opacity <= 0) {

        elem.style.opacity = 0;
        clearInterval(outInterval);

    }


    }, speed); // 10ms == .01s



}
/*animations*/
AOS.init();


$(document).ready(function(){
    $("#btn-menu").click(function(){
        $("#navlogo").slideUp(5000);
        $("#menu").slideDown(5000);
    });
});



/*typewriter*/
$(function(){
	$(".typed").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});
