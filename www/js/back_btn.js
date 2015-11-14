	var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
	
	
	
	function go_back() {
		if(window.sessionStorage.getItem('go_to_first')=="true")
		{
			window.sessionStorage.setItem('go_to_first',"false");
			window.location.href = "index.html";
		}
		else
		{
			parent.history.back();
		}
	}
	function go_back_to_index() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "index.html";
	}
	
	function exit() {
		console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    Exit the app! command');
		navigator.app.exitApp();
	}
	
	function loadURL(url){
		console.log('SMGROUP ::::::::::::::::::::::::::::::::::::    loadURL click : ' + url);
		window.open(url, '_system', 'location=yes');
		return false;
	}
	
	
	
	
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////Font Size///////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){
	$("#controls_size #small").click(function(event){
		event.preventDefault();
		$("#controls_size a").removeClass("selected");
		$(this).addClass("selected");
		$("#controls_size").removeClass("opened");
		$("#controls_over").css("position","relative");
		var font_style = "<style>";
			font_style = font_style + "#main p{font-size:" + "14" + "px !important;}";
			font_style = font_style + "#main h2{font-size:" + "14" + "px !important;}";
			font_style = font_style + "#main *{font-size:" + "14" + "px !important;}";
			font_style = font_style + "</style>";
		$("#controls_size #css_style").html(font_style);
	});	
	$("#controls_size #medium").click(function(event){
		event.preventDefault();
		if ($("#controls_size").hasClass("opened")) {
			$("#controls_size a").removeClass("selected");
			$(this).addClass("selected");
			$("#controls_size").removeClass("opened");
			$("#controls_over").css("position","relative");
			var font_style = "<style>";
			font_style = font_style + "#main p{font-size:" + "16" + "px !important;}";
			font_style = font_style + "#main h2{font-size:" + "16" + "px !important;}";
			font_style = font_style + "#main *{font-size:" + "16" + "px !important;}";
			font_style = font_style + "</style>";
			$("#controls_size #css_style").html(font_style);
		}
		else
		{
			$("#controls_over").css("position","fixed");
			$("#controls_size").addClass("opened");
		}
	});
	$("#controls_over").click(function(event){
		event.preventDefault();
		$("#controls_size").removeClass("opened");
		$(this).css("position","relative");
	});	
	$("#controls_size #large").click(function(event){
		event.preventDefault();
		$("#controls_size a").removeClass("selected");
		$(this).addClass("selected");
		$("#controls_size").removeClass("opened");
		$("#controls_over").css("position","relative");
		var font_style = "<style>";
			font_style = font_style + "#main p{font-size:" + "19" + "px !important;}";
			font_style = font_style + "#main h2{font-size:" + "19" + "px !important;}";
			font_style = font_style + "#main *{font-size:" + "19" + "px !important;}";
			font_style = font_style + "</style>";
		$("#controls_size #css_style").html(font_style);
	});	
});
////Font Size///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////playAudio///////////////////////////////////////////////////////////////////////////////////
function playAudioBackground(file){
	if ( device.platform == 'Android' ){//Android,iOS,win7=WinCE,win8=Win32NT
		file = "/android_asset/www/" + file;
	}
	
	audio = new Media(file, function(){ // success callback
		console.log("playAudio():Audio Success");
	}, function(error){ // error callback
		alert("code: "    + error.code    + "\n" + "message: " + error.message + "\n");
	});
	
	// play audio
	//audio.play({ playAudioWhenScreenIsLocked : false });
	audio.play();
	audio.seekTo(0);
}
/*


//init_audio("audio/salame.mp3");
//var audio_Timer = $("#audioTimer");
//var duration_Timer = $("#durationTimer");
//audio = null;
//var audioTimer = null;
//var pausePos = 0;

function init_audio(my_file){
	// Phonegap is loaded and can be used
	var play_btn = $("#play");
	var play2_btn = $("#play2");
	var pause_btn = $("#pause");
	var stop_btn = $("#stop");
	var slider_range = $("#slider");
	
	play_btn.click(function(){		
		play_btn.css("display","none");
		play2_btn.css("display","block");
		$(this).prop("disabled",true);
		play2_btn.prop("disabled",true);
		pause_btn.prop("disabled",false);
		
		playAudio(my_file);
	});

	slider_range.on("change", function(){
		play_btn.prop("disabled",false);
		play2_btn.prop("disabled",false);
		pause_btn.prop("disabled",true);

		pausePos = slider_range.val();
		formatTime(pausePos,audio_Timer);
		pauseAudio();
	});
	
	pause_btn.click(function(){		
		play_btn.prop("disabled",false);
		play2_btn.prop("disabled",false);
		pause_btn.prop("disabled",true);
		pauseAudio();
	});
	
	play2_btn.click(function(){			
		play_btn.prop("disabled",true);
		play2_btn.prop("disabled",true);
		pause_btn.prop("disabled",false);
		
		PausePlayAudio();
	});
	
	stop_btn.click(function(){
		// reset slider
		play_btn.css("display","block");
		play2_btn.css("display","none");
		play_btn.prop("disabled",false);
		play2_btn.prop("disabled",false);
		pause_btn.prop("disabled",true);
		$("#slider").val(0);
		//$("#slider").slider("refresh");
		stopAudio();
	});
	
}

function playAudio(file){
	if ( device.platform == 'Android' ){//Android,iOS,win7=WinCE,win8=Win32NT
		file = "/android_asset/www/" + file;
	}
	
	audio = new Media(file, function(){ // success callback
		console.log("playAudio():Audio Success");
	}, function(error){ // error callback
		alert("code: "    + error.code    + "\n" + "message: " + error.message + "\n");
	});
	
	// get audio duration
	var duration = audio.getDuration();
	var duration_show = false;
	
	// set slider data
	if( duration > 0 ){
		formatTime(duration,duration_Timer);
		$("#slider").attr( "max", Math.round(duration) );
		//$("#slider").slider("refresh");
		$("#slider").val(0);
		duration_show = true;
	}

	
	// play audio
	audio.play({ playAudioWhenScreenIsLocked : true });

	audio.seekTo(pausePos*1000);
		
	// update audio position every second
	if (audioTimer == null) {
		audioTimer = setInterval(function() {
			// get audio position
			audio.getCurrentPosition(
				function(position) { // get position success
					if (position > -1) {
						setAudioPosition(position);
					}
				}, function(e) { // get position error
					alert("Error getting pos=" + e);
					//setAudioPosition(duration);
				}
			);
			if(!duration_show){
				duration = audio.getDuration();
				if( duration > 0 ){
					formatTime(duration,duration_Timer);
					$("#slider").attr( "max", Math.round(duration) );
					//$("#slider").slider("refresh");
					duration_show = true;
				}
			}
		}, 1000);
	}
}


function pauseAudio() {
	if (audio) {
		audio.pause();
	}
}

function PausePlayAudio() {
	if (audio) {
		audio.pause();
		audio.seekTo(pausePos*1000);
		audio.play();
	}
}


function stopAudio() {
	if (audio) {
		audio.stop();
		audio.release();
	}
	clearInterval(audioTimer);
	audioTimer = null;
	pausePos = 0;
	formatTime(0,audio_Timer);
}


function setAudioPosition(position) {
	pausePos = position;
	position = Math.round(position);
	$("#slider").val(position);
	formatTime(position,audio_Timer);
	//$("#slider").slider("refresh");
	$("#slider").val(0);
}

function formatTime(seconds,Timer) {
	if (seconds <= 0)
	{
		Timer.html("00:00");
		return;
	}	
	var minutes = Math.floor(seconds / 60);
	
	if (minutes < 10)
		minutes = "0" + minutes;

	seconds = seconds % 60;
	if (seconds < 10)
		seconds = "0" + seconds;
	seconds = Math.round(seconds);
	
	Timer.html(minutes + ":" + seconds);
};
*/
////playAudio///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

