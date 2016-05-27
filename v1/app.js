var cats = [
	{
		"name": "Tabby",
		"pic": "https://s-media-cache-ak0.pinimg.com/736x/4c/a2/c1/4ca2c1d3ef5042461f5def25e68b2fa5.jpg",
		"clicks": 0
	},
	{
		"name": "Shelby",
		"pic": "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
		"clicks": 0
	}
];

function makeCatRows() {
	var toAdd = "";
	$.each(cats, function(catIndex, cat) {
		toAdd += "<div class='cat col-xs-6'><div class='container'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='clickable'/><div id='" + catIndex.toString() + "' class='count'>" + cat.clicks.toString() + "</div></div></div>";
	});
	$("#main").append("<div class='row'><div class='container'>" + toAdd + "</div></div>");
}

$(document).ready(function() {
	makeCatRows();
	$(".clickable").click(function(obj) {
		var elem = obj.target.parentElement.childNodes[2];
		cats[elem.id].clicks += 1;
		$("#" + elem.id).text(cats[elem.id].clicks);
	});
});