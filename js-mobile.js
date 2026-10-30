$(document).ready(function(){
	$("#js_mobile_menu").click(function(e){
		e.preventDefault();
		$(".js_mobile_menu").slideToggle();
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
//this is a little trick i came up with because TEMPLAR broadcasts a "TEMPLAR" event after every route. SO if you want your mobile menu to hide on route, just listen for the "TEMPLAR" event and force hide it.
