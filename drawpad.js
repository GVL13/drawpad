
// $(document).ready(function(){})

/*
function posttest() {
	pixInput = parseInt(document.getElementById("pixels").value);
	window.alert(pixInput);
}
*/	
function gridmaker() {
	var pixInput = parseInt(document.getElementById("pixels").value);
	var totalPix = Math.pow(pixInput, 2)/2;
	for (var i = 0; i < totalPix; i++) {
		$("#big-ass-grid").append("<div class='pix-box'></div>")
	};

	var calc_width = ((1200-(2*pixInput))/pixInput);
	window.alert(calc_width)
	$(".pix-box").css("width", calc_width+"px");
	$(".pix-box").css("height", calc_width+"px");
	// something here to make buttons disappear or otherwise deactivate-else it'll fuck up
}

/*
function gridlines() {
	$(".pix-box").css("border-style", "dashed");
}
*/