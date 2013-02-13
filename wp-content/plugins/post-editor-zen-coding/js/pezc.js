/**
 * Post editor Zen coding 
 */
var Better_editor = null;
var Better_editor_loaded = false;
var Better_editor_textarea_h = 0;
jQuery(document).ready(function ($) {
	
	
	$('<a id="content-pezc" class="hide-if-no-js wp-switch-editor switch-pezc">Zen Coding</a>')
		.prependTo('#wp-content-editor-tools')			
		.on('click', function () {if (!Better_editor_loaded) create_editor();});

	$('#content-html, #content-tmce').attr('onclick', '');
	$('#content-html, #content-tmce').on('click', function (e) {
		// quick fix to make sure that the right content area gets set to display
		// visible when its tab is clicked. for some reason the html textarea gets stuck on
		// display:none when going from load->ACE->Visual->HTML
		
		var clicked = $(e.currentTarget).attr('id').split('-')[1];
		Better_editor_remove(clicked);
		switch (clicked) {
			case 'tmce':
				$(".quicktags-toolbar").hide();
				$('#content_parent').show();
				switchEditors.switchto(document.getElementById("content-tmce"));
				break;
			case 'html':
				$('#content').css('height',Better_editor_textarea_h);
				$(".quicktags-toolbar").show();
				switchEditors.switchto(document.getElementById("content-html"));
				switchEditors.switchto(document.getElementById("content-tmce"));
				switchEditors.switchto(document.getElementById("content-html"));
				break;
		}
	});

	if (getUserSetting('better_editor') == 1) create_editor();

	function create_editor(){
		if (Better_editor_loaded) return false;
		$('#content-pezc').addClass('zc-active');
		Better_editor_textarea_h = $('#content').css('height');
		switchEditors.switchto(document.getElementById("content-html"));
		Better_editor = CodeMirror.fromTextArea(document.getElementById("content"), {
			mode: "text/html", 
			lineNumbers: true, 
			profile: 'xhtml',
			onKeyEvent: function(i, e) {
    		// Hook into comment out
      			if (e.keyCode == 112 && (e.ctrlKey || e.metaKey) && !e.altKey) {
		    		e.stop();
		    		tb_show('Post Editor Zen Coding','#TB_inline?&width=600&inlineId=zc_help');
		    		$('#TB_window').addClass('zcHelp');
		    		zc_thickbox();
		      	}
		 	}
		});
		Better_editor_loaded = true;
		Better_editor_OnLoad();
	}

	function Better_editor_OnLoad(){
		setUserSetting('editor', 'html');
		setUserSetting('better_editor', 1);
		// hide all the default wp stuff
		$("#wp-content-media-buttons, #content_parent, .quicktags-toolbar").hide();
		$('#wp-content-wrap').removeClass('html-active tmce-active').addClass('pezc-active');
	}

	function Better_editor_remove(clicked){
		if (!Better_editor_loaded) return false;
		$('#content-pezc').removeClass('zc-active');
		setUserSetting('better_editor', 0);
		Better_editor.toTextArea();
		$("#wp-content-media-buttons, #content_parent").show();
		Better_editor_loaded = false;
	}

	/**
	 * zc_thickbox better thickbox resize
	 */
	function zc_thickbox() {
		var zcWidth			= 600;
		var zcH			= 400;
		var TB_newWidth			= ($(window).width() < (zcWidth + 40)) ? $(window).width() - 40 : zcWidth;
		var TB_newHeight		= $(window).height() - 70;
		var TB_newMargin		= ($(window).width() - zcWidth) / 2;

		$('#TB_window').css({'marginLeft': -(TB_newWidth / 2)})
		$('#TB_window, #TB_iframeContent').width(TB_newWidth).height(TB_newHeight)
	}

	/**
	 * Checks how to resize the TB window. Called on window.resize.
	 */	
	function zc_window_resize() {
		if ($('#TB_window').hasClass('zcHelp'))
			zc_thickbox();
		else
			tb_position();
	}

	/**
	 * Cast the media managers window.resize event into the fire.
 	 */
	$.each( $(window).data('events')['resize'], function(i, event) {
		var thisEvent		= event.toString().replace(/\n/g, '').replace(/\t/g, '').split(' ').join('');
		var expectedEvent	= 'function(){tb_position()}';

	    if (thisEvent == expectedEvent) {
			delete $(window).data('events')['resize'][i];
			$(window).bind('resize.ournamespace', zc_window_resize)
	    }
	});

});

	