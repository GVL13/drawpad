
// $(document).ready(function(){})

/*
function posttest() {
	pixInput = parseInt(document.getElementById("pixels").value);
	window.alert(pixInput);
}
*/	
function gridmaker() {
	pixInput = parseInt(document.getElementById("pixels").value);
	for (var i = 0; i < pixInput; i++) {
		$("#big-ass-grid").append("<div class='pix-box'></div>")
		// something to make buttons disappear or otherwise deactivate-else it'll fuck up
	}
	$(".box").addclass("pix-box");
}