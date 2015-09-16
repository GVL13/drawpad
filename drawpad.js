function gridmaker() {
	var pixInput = parseInt(document.getElementById("pixels").value);
	var totalPix = Math.pow(pixInput, 2)/2;
	$(".pix-box").remove();
	for (var i = 0; i < totalPix; i++) {
		$("#big-ass-grid").append("<div class='pix-box'></div>")
	};
	var calc_width = ((1200-(2*pixInput))/pixInput);
	$(".pix-box").css("width", calc_width+"px");
	$(".pix-box").css("height", calc_width+"px");
	boxcolor();
}

function gridlines() {
	$(".pix-box").css("border-style", "solid");
};


function boxcolor() {
	$(".pix-box").hover(function(){
		$(this).css("background-color", "red")
		}, function(){
		$(this).css("background-color", "black")
	})
};