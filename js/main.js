$(document).ready(function() {

	var b = 0;
	var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

	$(".firstbutton").click(function() {
		if (b>6) b=0;
		$(".content").append("<div>" + week[b] + "</div>");
		b = b + 1;

	});

});