function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



/*typewriter*/
var type = new Typed("#typed",{
    stringsElement: "#typed-strings",
    startDelay : 1200,
    typeSpeed : 300,
  // backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 10,
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


var myVar;

function myFunction() {
    myVar = setTimeout(showPage,6000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("background").style.display = "block";
}
