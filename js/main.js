// JavaScript Document
function getParameterByName(name) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}

var id = getParameterByName("id");

var selScrollable = '.menu_body#gridview';
	// Uses document because document will be topmost level in bubbling
	$(document).on('touchmove',function(e){
	  e.preventDefault();
	});
	// Uses body because jQuery on events are called off of the element they are
	// added to, so bubbling would not work if we used document instead.
	$('body').on('touchstart', selScrollable, function(e) {
	  if (e.currentTarget.scrollTop === 0) {
		e.currentTarget.scrollTop = 1;
	  } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
		e.currentTarget.scrollTop -= 1;
	  }
	});
	// Stops preventDefault from being called on document if it sees a scrollable div
	$('body').on('touchmove', selScrollable, function(e) {
	  if($(this)[0].scrollHeight > $(this).innerHeight()) {
			e.stopPropagation();
		}
	});

//GG add starts

jQuery(document).ready(function () {
    //hide #listview for 0.3s
     //setTimeout(function(){ jQuery("#listview ul").hide(); });
     //setTimeout(function(){ jQuery("#listview ul").show(); }, 1300);
/*	 setTimeout(function(){ jQuery("#listview ul").css('visibility','hidden'); });
	 setTimeout(function(){ jQuery("#listview ul").css('visibility','visible').hide().fadeIn('slow'); }, 200);
*/});

//GG add Ends