
$(document).ready(function(){

})

function posttest() {
		pixInput = document.getElementById("pixels").value; // problem here: either .value or .getElementById doesnt work
		// var pixInput = "foo" // this works
		window.alert(pixInput); // this is not the problem
	}
/*
function gridmaker(x) {
	for (var i = 0; i < x.length; i++) {
		$("#big-ass-grid").click(function() {
			$("this").append(<div class="box"></div>)
		})
	};
}
*/
// grid-maker(pix)




