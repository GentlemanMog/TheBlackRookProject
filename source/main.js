var main = function(){

	$('.bubble').click(function(event) {
		$('.draggable').draggable().resizable();
		$('.margin-btnNav').draggable({ containment: "parent"});
		$('.sortable').sortable({ containment: "parent"}).resizable();
	});

	$('.about-details').mouseover(function() {
		$('#details').toggleClass('larger-details', 1000 );
	});

}
$(document).ready(main);