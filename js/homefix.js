$(document).ready(function(){
	var box = $("#container");
	function fix(){
		var wH = $(window).height(),
			bH = box.height();				   
		if(wH > bH){					   
			var mar_top = (wH - bH)/2;				   
			box.css("margin-top",mar_top);
		}else{
			box.css("margin-top","0px");
		}
	}	
	
	fix();
	box.css("visibility", "visible");
	
	$(window).resize(function(){
		fix();	
		box.css("visibility", "visible");
	});
});