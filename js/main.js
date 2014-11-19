$(document).ready(function() {

	var b = 0;
	var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

	$(".firstbutton").click(function() {
		
		$(".content").append("<div>" + b + "</div>");
		b = b + 1;

	});

});