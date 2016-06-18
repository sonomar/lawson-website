$(document).ready(function() {

	var startText;

	$("body").on("mouseenter", ".recent-project", function () {
		startText = $(this).text();
		$(this).css({
			'opacity': ".4",
			'-webkit-transition': "color .5s, opacity .5s",
		  '-moz-transition':    "color .5s, opacity .5s",
		  '-ms-transition':     "color .5s, opacity .5s",
		  '-o-transition':      "color .5s, opacity .5s",
		  'transition':         "color .5s, opacity .5s"
		});
		$(this).html("test");
	});

	$("body").on("mouseleave", ".recent-project", function () {
		$(this).css({
			'opacity': "1",
			'-webkit-transition': "color .5s, opacity .5s",
		  '-moz-transition':    "color .5s, opacity .5s",
		  '-ms-transition':     "color .5s, opacity .5s",
		  '-o-transition':      "color .5s, opacity .5s",
		  'transition':         "color .5s, opacity .5s"
		});
		$(this).html(startText);
	});

	$("body").on("click", "a", function() {
  
		var linkInfo = $(this);
		if($(this).attr("href").charAt(0) === "/") {
			event.preventDefault();
			$.ajax({
	      type: "get",
	      url: linkInfo.attr("href"),
	      data: $(this).serialize()
	    }).done(function(results) {
	    	$(".page-contents").html(results);
	    	window.scrollTo(0, 0);

	    	//fade out on click
	    	if($(".sub-heading").text().toLowerCase() === linkInfo.attr("href").slice(1)) {
	    		return;
	    	}
	    	if($(".sub-heading").text().toLowerCase() === "watch video" && linkInfo.attr("href") === "/") {
	    		return;
	    	}
	    	if(linkInfo.attr("href").length > 1) {
	    		$(".sub-heading").fadeOut( "slow", function() {
  					$(".sub-heading").html(linkInfo.attr("href").slice(1).toUpperCase());
  				});
	    		$(".sub-heading").fadeIn( "slow" );
	    	}
	    	else {
	    	$(".sub-heading").fadeOut( "slow", function() {
	    		$(".sub-heading").html('<span class="heading-link box-link"><a href="/about_vid">Watch Video</a></span>')
	    	});
	    	$(".sub-heading").fadeIn( "slow" );
	    	}

	    	//highlights current page
	    	for(i=0; i<4; i++) {
	    		$(".nav-links").children().eq(i).children().css({"color":"rgba(255,255,255,.7)"});
	    	}
	    	var findTopLink = $(".nav-links").find(".top-" + linkInfo.attr("href").slice(1) + "-link");
	    	if(linkInfo.attr("href").slice(1)[0] === undefined) {
	    		$(".top-home-link").children().css({"color":"rgba(255,255,255,1)"})
	    	}
	    	else {
	    		findTopLink.children().css({"color":"rgba(255,255,255,1)"})
	    	};
	    	return
	    });
	  };
	});

});
