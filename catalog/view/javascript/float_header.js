$(document).ready(function(){
	var scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);
    <!-- alert( "Текущая прокрутка: " + scrollHeight);--> 

	var windowWidth = $(window).width();

<!-- alert( "Текущая ширина: " + scrollWidth); -->

	var windowHeight = $(window).height();
	
	var diffHeight = scrollHeight - windowHeight;
	
<!-- alert( "Текущая высота: " + diffHeight);-->

	if (scrollHeight - windowHeight > 200 && windowWidth > 750) {

		var $menu = $("#top_nav");
	
		var $addbottom = $("#addbottom");
	
		$(window).scroll(function(){

			if ( $(this).scrollTop() > 126 && $menu.hasClass("default") && $addbottom.hasClass("default")){
				
				$menu.removeClass("default").addClass("fixed");
				$addbottom.removeClass("default").addClass("fixed");

			} else if($(this).scrollTop() <= 126 && $menu.hasClass("fixed") && $addbottom.hasClass("fixed")) {
		
				$menu.removeClass("fixed").addClass("default");
				$addbottom.removeClass("fixed").addClass("default");

			}

		});//scroll
	}
});//ready
