$(document).ready(function() {

	var b = 0;

	$(".firstbutton").click(function() {
		if (b>6) b=0;
		$(".content").append("<div>" + b + "</div>");
		b = b + 1;

	});

});