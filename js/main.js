$(document).ready(function() {

	var b = 0;
	var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

	var vehicles = [
		{
			"name": "car",
			"wheels" : 4,
			"colour" : "red",
			"wings" : 0
	    },
		{
			"name": "lorry",
			"wheels" : 18,
			"colour" : "blue",
			"wings" : 0
		}
	];

	$(".firstbutton").click(function() {
		
		$("#vehicle-number").text(b+1);
		$("#vehicle-name").text(vehicles[b].name);
		$("#vehicle-wheels").text(vehicles[b].wheels);
		$("#vehicle-colour").text(vehicles[b].colour);
		$("#vehicle-wings").text(vehicles[b].wings);

		$("#week-day").text(week[b]);

		b = b + 1;

	});

});