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
	function go_back_to_map() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "map.html";
	}
	function go_back_to_map_en() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "en_map.html";
	}
	function go_back_to_dar_safar() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "dar_safar.html";
	}
	function go_back_to_dar_safar_en() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "en_dar_safar.html";
	}
	function go_back_to_ghable_safar_en() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "en_ghable_safar.html";
	}
	function go_back_to_ghable_safar() {
		window.sessionStorage.setItem('go_to_first',"false");
		window.location.href = "ghable_safar.html";
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
	
	!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l),s||(f.detach(),s=!0)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

	$(document).ready(function() {
		header_temp = $("#header-text-2th");
		header_temp.width(	$(window).width() -	$("#back-btn").width() - 90		);
		header_temp.dotdotdot({});
		header_temp.width(	header_temp.width() + 120		);
		
	});
	
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

