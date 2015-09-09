var main = function(){

$('#customizable').attr('id').draggable();

	$('.customize').click(function(event){
		var active = $('draggable').attr('id');
		var customize = $('customizable').attr('id');
		

		customize.attr('draggable');
		active.addclass('borders');
		active.draggable();
	})



}
$(document).ready(main);