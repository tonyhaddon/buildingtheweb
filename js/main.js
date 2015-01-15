
$(document).ready(function() {

	var b = 0;
	
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
			"name": "airplane",
			"wheels" : 6,
			"colour" : "white",
			"wings" : 2
		},	
		{
			"name": "speedboat",
			"wheels" : 0,
			"colour" : "yellow",
			"wings" : 0
		}	
	]

	$(".firstbutton").click(function() {
		
		if (b >= vehicles.length) b=0;


		$("#vehicle-number").text(b+1);
		$("#vehicle-name").text(vehicles[b].name);
		$("#vehicle-number-wheels").text(vehicles[b].wheels);
		$("#vehicle-colour").text(vehicles[b].colour);
		$("#vehicle-number-wings").text(vehicles[b].wings);

		b = b + 1;

	});
});
