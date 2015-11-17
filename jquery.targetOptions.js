/***
 * TargetOptions
 * 
 * By Matias Tofful 2015
 * 
 * Extend the functionality of target in an <a> tag
 * using target="_options"
 * 
 * Options:
 *  - title (string)
 *  - theme (string)
 		| auto, ios, mac, ie, chrome	
 * 	- blank (object):
 * 		| display (bool)
 * 		| text (string)	
 * 		| class (string)
 *  - self (object):
 * 		| display (bool)
 * 		| text (string)
 * 		| class (string)
 *  - parent (object):
 * 		| display (bool)
 * 		| text (string)
 * 		| class (string)
 *  - top (object):
 * 		| display (bool)
 * 		| text (string)
 * 		| class (string)
 *  - frame (object):
 * 		| display (bool)
 * 		| text (string)
 * 		| class (string)
 */
(function($){
	'use strict';
	
	$.fn.targetOptions = function(options){
		
		/**
		 *	Options
		 */
		var defaults = {
			title : '',
			theme: 'auto',
			blank: {
				display : true,
				text: 'Open in a new window',
				'class': null
			},
			self: {
				display : true,
				text: 'Open in this window',
				'class': null
			},
			parent: {
				display : false,
				text: 'Open in a parent window',
				'class': null
			},
			top: {
				display : false,
				text: 'Open in a Top window',
				'class': null
			},
			frame: {
				display : false,
				text: 'Open in an iFrame',
				'class': null
			}
		};
		
		var ops = $.extend(true, {}, defaults, options);
		
		    /**
			 *	each element
			 */ 
			return this.each(function (i, el) {
				
				if ( $(el).attr("target") == '_options') {
					
					var element = $(el),
						href = element.attr("href"),
						link = '',
						title = '',
						cssClass = '',
						wrap = "<div class='target-options-wrap'></div>";
						
						/**
			 			 *	Options
			 			 */
						$.each(ops, function(index, value){
							//Options to offer to the user
							if( value.display == true ){
								
								//if contain css class
								if(value.class){
									cssClass = 'class="' + value.class + ' target-' + index + '"';
								}else{
									cssClass = 'class="target-' + index + '"';
								}
								
								if(index == 'frame'){
									// iframe
									link +=  '<i ' + cssClass +' data-frame="true" data-href="' + href + '" target="_' + index + '">' + value.text + '</i>';
								}else{
									// normal links
									link +=  '<i ' + cssClass +' data-href="' + href + '" target="_' + index + '">' + value.text + '</i>';
								}

								
							}	
						});

						/**
			 			 *	Title
			 			 */
						if(ops.title){
							// title goes here
							//console.log("Has title: " + ops.title.replace(/[^a-zA-Z0-9 _-]/g,'') );
							title = '<span class="target-options-title">' + ops.title + '</span>';
						}
		
						var options = '<div class="target-options" style="opacity:0;display:none;">' +
								 		title +
										' <span class="target-options-wrap-opts">' +
										 	link + 
										'</span>' +
								  '</div>';
						
						/**
			 			 *	Create elements around <a> tag
			 			 */
						element.wrap(wrap);
						element.parent('.target-options-wrap').prepend(options);
						
						/**
			 			 *	Frame
			 			 */
						if(ops.frame.display){
							// create div .target-options-iframe to insert iFrame on it
							$('body').append('<div class="target-options-iframe">');
						}
						
						/**
			 			 *	Theme
			 			 */
						 switch(ops.theme){
							 //auto, ios, mac, ie, chrome
							 case 'ios':
							 	$('head').append('<link href="css/ios-style.css" rel="stylesheet"/>');
							 	break;
							 case 'mac':
							 	$('head').append('<link href="css/mac-style.css" rel="stylesheet"/>');
							 	break;
							 case 'ie':
							 	$('head').append('<link href="css/ie-edge-style.css" rel="stylesheet"/>');
							 	break;
							 case 'chrome':
								$('head').append('<link href="css/windows-chrome-style.css" rel="stylesheet"/>');
							 	break;	
							 default:
							 	//auto, default browser view
								//console.log('default browser view');
									
									var browser = {
										chrome: false,
										mozilla: false,
										opera: false,
										msie: false,
										safari: false
									};
									var sUsrAg = navigator.userAgent;
									
									if(sUsrAg.indexOf("Macintosh") > -1) {
										//console.log("MAC");
										$('head').append('<link href="css/mac-style.css" rel="stylesheet"/>');
									}else{
										
										//console.log("NO MAC");
									
									
										if(sUsrAg.indexOf("Chrome") > -1) {
											browser.chrome = true;
											$('head').append('<link href="css/windows-chrome-style.css" rel="stylesheet"/>');
										} else if (sUsrAg.indexOf("Safari") > -1) {
											browser.safari = true;
											$('head').append('<link href="css/mac-style.css" rel="stylesheet"/>');
										} else if (sUsrAg.indexOf("Opera") > -1) {
											browser.opera = true;
											$('head').append('<link href="css/windows-chrome-style.css" rel="stylesheet"/>');
										} else if (sUsrAg.indexOf("Firefox") > -1) {
											browser.mozilla = true;
											$('head').append('<link href="css/windows-chrome-style.css" rel="stylesheet"/>');
										} else if (sUsrAg.indexOf("MSIE") > -1) {
											browser.msie = true;
											$('head').append('<link href="css/ie-edge-style.css" rel="stylesheet"/>');
										}
									}
													
							 	break;		
						 }
	  	
				}
			});
			
	}//end $.fn
	
})(jQuery);

	
/**
 *	Show Options
 */
$(document).on("click", ".target-options-wrap a", function (event) {
	event.preventDefault();
	event.stopPropagation();
	var element = $(this),
		targetOptions = element.parent('.target-options-wrap').find('.target-options');

	//Hide previous opened options
	$('.target-options').hide();
	
	//Show this options
	targetOptions.animate({
		top: "-55px",
		opacity: 1,
	}, 150).css("display", "block");
});
/**
 * Go to location
 */
$(document).on("click", ".target-options-wrap-opts i", function (event) {
	var element = $(this),
		href = element.data("href"),
		target = element.attr("target");
		
	if( element.data("frame") ){
		//open frame
		$('.target-options-iframe')
			.html('<div class="target-options-frame-close">X</div><iframe src="' + href + '"></iframe>')
			.fadeIn("fast");
	}else{
		//open element	
		window.open(href, target);
	}		
	
	//Hide options
	$('.target-options').animate({
		top: "0px",
		opacity: 0,
	}, 150).css("display", "none");
	
	//done
	done = true;
});
/**
 * Close iFrame
 */
$(document).on("click", ".target-options-frame-close", function(){
	$(".target-options-iframe").fadeOut("fast");
});
/**
 * Close options on click outside
 */
$(document).on("click", "body", function(){
	if( $(".target-options").is(":visible") ){
		$('.target-options').animate({
			top: "0px",
			opacity: 0,
		}, 150).css("display", "none");
	}
});
			
