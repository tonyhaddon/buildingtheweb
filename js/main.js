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
		},
		{
			"name": "helicopter",
			"wheels" : 0,
			"colour" : "orange",
			"wings" : 4
		},
		{
			"name": "aeroplane",
			"wheels" : 12,
			"colour" : "yellow",
			"wings" : 2
		},

	];

	$(".firstbutton").click(function() {
		
		if (b >= vehicles.length)
		{
			b = 0;
		}

		$("#vehicle-number").text(b+1);
		$("#vehicle-name").text(vehicles[b].name);
		$("#vehicle-wheels").text(vehicles[b].wheels);
		$("#vehicle-colour").text(vehicles[b].colour);
		$("#vehicle-wings").text(vehicles[b].wings);

		b = b + 1;

	});

});