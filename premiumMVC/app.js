$(function() {	
	var model = {
		init: function() {
			currentCat = null;
			allCats = [
				{
					name: "Cat1",
					pic: "https://s-media-cache-ak0.pinimg.com/736x/4c/a2/c1/4ca2c1d3ef5042461f5def25e68b2fa5.jpg",
					clickCount: 0
				},
				{
					name: "Cat2",
					pic: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
					clickCount: 0
				},
				{
					name: "Cat3",
					pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZmNMvGoUC5ypAeel-sYr4poKXmO16ykCIgkjI1rkeUaEMLpDF5Q",
					clickCount: 0
				},
				{
					name: "Cat4",
					pic: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-1_ibjpaTeqpOxtlN0ToWI7kO73oWjq6gcbqXsGMe3i_MZOtl",
					clickCount: 0
				},
				{
					name: "Cat5",
					pic: "http://science-all.com/images/wallpapers/cat-images/cat-images-7.jpg",
					clickCount: 0
				}
			];
		},
		getAllCats: function() {
			return allCats;
		},
		getCurrentCat: function() {
			return currentCat;
		},
		changeCurrentCat: function(index) {
			currentCat = index;
		},
		incrementCatCount: function(index) {
			allCats[index].clickCount += 1;
		}
	};

	var octopus = {
		init: function() {
			model.init();
			listView.init();
		},
		getCats: function() {
			return model.getAllCats();
		},
		getCat: function() {
			return model.getCurrentCat();
		},
		changeCat: function(index) {
			model.changeCurrentCat(index);
			displayView.render();
		},
		incrementCount: function(index) {
			model.incrementCatCount(index);
			displayView.render();
		}
	};

	var listView = {
		init: function() {
			cats = octopus.getCats();
			var toAppend = "";
			$.each(cats, function(catIndex, cat) {
				toAppend += "<li class='cat list-group-item'>" + cat.name + "</li>";
			});
			$("#list").append("<ul class='list-group'>" + toAppend + "</ul>");
			$(".cat").click(function(obj) {
				id = cats.indexOf(cats.filter(function(a){ return a.name == obj.target.innerHTML; })[0]);
				octopus.changeCat(id);
			});
		}
	};

	var displayView = {
		render: function() {
			$("#display").empty();
			cats = octopus.getCats();
			cat = cats[octopus.getCat()];
			var toDisplay = "<div class='container'><div class='name'>" + cat.name + "</div><img src='" + cat.pic + "' class='clickable'/><div id='" + octopus.getCat().toString() + "' class='count'>" + cat.clickCount.toString() + "</div></div>";
			$("#display").append(toDisplay);
			$(".clickable").click(function(object) {
				var elem = object.target.parentElement.childNodes[2];
				octopus.incrementCount(elem.id);
				$("#" + elem.id).text(cats[elem.id].clicks);
			});			
		}
	};

	octopus.init();
});