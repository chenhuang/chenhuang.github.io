$(document).ready(function(){
	/*var sec = $('section');
    sec.waypoint(
    	function(direction) {
        //var activeSection = $(this).next();
        var activeSection = $(this);
        if(direction === 'down'){
            activeSection = $(this).next();
        }
        //activeSection = $(this);
        var sectionId   = activeSection.attr('id');
        $('ul li').removeClass('active');
        $('ul li.' + sectionId).addClass('active');
        console.log(activeSection);
    });*/
/*
	var nav = $('#nav');
	var navHomeY = nav.offset().top;
	var isFixed = false;
	var $w = $(window);
	$w.scroll(function() {
		var scrollTop = $w.scrollTop();
		var shouldBeFixed = scrollTop > navHomeY
		if (shouldBeFixed && !isFixed) {
			nav.css({
				position: 'fixed',
				top: 0
			});
//			nav.removeClass('ul_static').addClass('ul_fixed');
			isFixed = true;
		}
		else if (!shouldBeFixed && isFixed) {
			nav.css({
				position: 'static'
			});
//			nav.removeClass('ul_fixed').addClass('ul_static');
			isFixed = false;
		}
		});
*/
});