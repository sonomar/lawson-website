$(document).ready(function() {
	
	var startText;

  $("body").on("submit", "#send-mail-form", function(e) {
  	e.preventDefault();
  	e.stopPropagation();
  	$(".modal-body").html('<p>"Form Submitted!"</p><div class="text-center"><button type="button" class="close close-mail-modal" data-dismiss="modal">CLOSE</button></div>')
  });
 //    $.ajax({
 //    		type: "get",
 //        url: $(this).attr("href")
 //    }).done(function(results) {
         
 //      })
	// });

	$("body").on("mouseenter", ".recent-project-wrapper", function () {
		startText = $(this).text();
		$(this).children().css({
			'-webkit-transition': "color .5s, background .5s",
		  '-moz-transition':    "color .5s, background .5s",
		  '-ms-transition':     "color .5s, background .5s",
		  '-o-transition':      "color .5s, background .5s",
		  'transition':         "color .5s, background .5s",
		  position: 'relative',
			'background-color': 'rgba(0,0,0,0.8)',
			display: 'block',
			height: '10px',
			'min-width': '100px',
			padding: '100px'
		});
		if(startText.trim() === "Verona") {
			var hlText = "An app to find friends across divides!"
			var hlSiteLink = "https://getverona.com"
			var hlInfoLink = "https://angel.co/verona-app" 
		}
		else if(startText.trim() === "Chess") {
			var hlText = "Saveable jQuery UI Chess Game"
			var hlSiteLink = "https://lawchess.herokuapp.com"
			var hlInfoLink = "https://github.com/sonomar/law_chess" 
		}
		else if(startText.trim() === "Juke") {
			var hlText = "An app to find friends across divides!"
			var hlSiteLink = "https://jukeapp.herokuapp.com"
			var hlInfoLink = "https://github.com/sonomar/JUKE" 
		};
		$(this).children().html(
			'<div id="project-description">' + hlText + '</div><span id="project-link"><a href=' + hlSiteLink + '>View Project</a></span><span id="project-info-link"><a href=' + hlInfoLink + '>More Info</a></span>'
		);
	});

	$("body").on("mouseleave", ".recent-project-wrapper", function () {
		$(this).children().css({
			'-webkit-transition': "color .5s, background .5s",
		  '-moz-transition':    "color .5s, background .5s",
		  '-ms-transition':     "color .5s, background .5s",
		  '-o-transition':      "color .5s, background .5s",
		  'transition':         "color .5s, background .5s",
		  position: 'relative',
			'background-color': 'rgba(0,0,0,0)',
			display: 'block',
			height: '10px',
			'min-width': '100px',
			padding: '100px'
		});
		$(this).children().html(startText);
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
	    	if(linkInfo.attr("href") ==="/contacts/new") {
	    		window.scrollTo(0, 0);
	    		$(results).appendTo("body");
        	$('#myModal').modal('show');
      	}
      	else {
	    	$(".page-contents").html(results);
	    	window.scrollTo(0, 0);
	    		if(linkInfo.attr("href") === "/about") {
	    			initMap();
	    		};


		    	//fade out on click
		    	
		    	if($(".sub-heading").text().toLowerCase() === linkInfo.attr("href").slice(1)) {
		    		return;
		    	}
		    	if($(".sub-heading").children().children().text().toLowerCase() === "watch video" && linkInfo.attr("href") === "/about_vid" || $(".sub-heading").children().children().text().toLowerCase() === "watch video" && linkInfo.attr("href") === "/") {
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
		    		$(".sub-heading").html('<span class="heading-link box-link"><a href="/about">Learn More</a></span>')
		    	});
		    	$(".sub-heading").fadeIn( "slow" );
		    	}

		    	//highlights current page
		    	for(i=0; i<3; i++) {
		    		$(".nav-links").children().eq(i).children().css({"color":"rgba(255,255,255,.7)"});
		    		$(".nav-links").children().eq(i).addClass("hover-link");
		    	}
		    	var findTopLink = $(".nav-links").find(".top-" + linkInfo.attr("href").slice(1) + "-link");
		      
		    	if(linkInfo.attr("href").slice(1)[0] === undefined) {
		    		$(".top-home-link").children().css({"color":"rgba(255,255,255,1)"})
		    	}
		    	else {
		    		findTopLink.children().css({"color":"rgba(255,255,255,1)"})
		    	};
		    	setSibs = findTopLink;
		    	return;
		    };
	    });
	  };
	});

});
