$(document).ready(function(){
	$("#menu").click(function(e){
		e.preventDefault();
		$(".menu").slideToggle();
	})

	$(window).resize(function(){
		if($(window).width() > 1079)
			$(".menu").hide();
	})
})

//if using TEMPLAR-Router
$(document).on("TEMPLAR", function(){
	$(".menu").hide();//hides menu when <a> clicked and page routes
})
