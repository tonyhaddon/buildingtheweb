$(document).ready(function() {

	var b = 0;
	var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

	var vehicle = {
	"name": "car",
	"wheels" : 4,
	"colour" : "red",
	"wings" : 0
     };

	$(".firstbutton").click(function() {
		
		$("#vehicle-number").text(b+1);
		$("#vehicle-name").text(vehicle.name);
		$("#vehicle-wheels").text(vehicle.wheels);
		$("#vehicle-colour").text(vehicle.colour);
		$("#vehicle-wings").text(vehicle.wings);

		$("#week-day").text(week[b]);

		b = b + 1;

	});

});