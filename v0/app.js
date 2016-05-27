$(document).ready(function() {
	var counter = 0;
	$("#count").append("<p id='clicks'>" + counter.toString() + "</p>");
	$("#img").click(function() {
		counter += 1;
		$("#clicks").text(counter.toString());
	});
});