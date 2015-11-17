if(true)
{
	//window.localStorage.getItem('offline');
	var temp_element;
	
	$( document ).ready(function() {
/*
		$('.play_it').each( function(i) {
			//$(this).css("display","none");
			var temp_array = JSON.parse(window.localStorage.getItem('downloaded_files'));
			if($.inArray($.md5($(this).attr('online')),temp_array) != -1)
			{
				$(this).removeClass("need_download").addClass("downloaded");
			}
		});
		$('.play_it').click( function(i) {
			//$(this).css("display","none");
			//alert($(this).attr('online'));
			
			//temp_array = JSON.parse(window.localStorage.getItem('downloaded_files'));
			//temp_array.push($.md5($(this).attr('online')));
			//window.localStorage.setItem('downloaded_files',JSON.stringify(temp_array));
			temp_element = $(this);
			play_or_download($(this).attr('online'));
		});
*/
		
	});
	
	
	
	function alertDismissed() {
		// do something
	}
	
	function play_or_download(URL,Extension) {
		console.log("play_or_download URL: " + URL);
		console.log("play_or_download Extension: " + Extension);

		if (device.platform == 'iOS')
		{
			console.log("play_or_download IOS 1");
			downloadPath = "cdvfile://localhost/persistent/";
			window.localStorage.setItem('download_address',downloadPath);
			console.log("play_or_download IOS 2");
		}
		
		downloadPath = window.localStorage.getItem('download_address') + $.md5(URL) + "." + Extension;
		console.log("play_or_download : " + downloadPath);
		if(check_download(URL))
		{
			console.log("play_or_download : check_download");
			var media2 = new Media(downloadPath, null, function(e) { alert(JSON.stringify(e));});
			media2.play();
		}
		else
		{
			console.log("play_or_download : start_download");
			start_download(URL,Extension);
		}
	}
	
	
	
	function start_download(URL,Extension) {
		var networkState = navigator.connection.type;
		if (networkState == Connection.NONE) {
			navigator.notification.alert(
				'شما برای اینکار به اینترنت نیاز دارید.\n You need internet to download this file.',  // message
				alertDismissed,         // callback
				'اخطار',            // title
				'تائید'                  // buttonName
			);
		}
		else{
			return false;
		}
		console.log("start_download URL: " + URL);
		console.log("start_download Extension: " + Extension);
		
		var FileTransfer_OBJ = new FileTransfer();
		var uri = encodeURI(URL);
		
		if (device.platform == 'iOS')
		{
			downloadPath = "cdvfile://localhost/persistent/";
			window.localStorage.setItem('download_address',downloadPath);
		}
		
		downloadPath = window.localStorage.getItem('download_address') + $.md5(URL) + "." + Extension;
		console.log("start_download : " + downloadPath);
		
		FileTransfer_OBJ.onprogress = function(progressEvent) {
			if (progressEvent.lengthComputable) {
				var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
				$('#status').html(perc + "% loaded...");
			} else {
				$('#status').html($('#status').html() + ".");
			}
		};
		
		FileTransfer_OBJ.download(uri, downloadPath, 
			function(entry) {	
				$('#status').html("done");
				console.log("start_download : done");
				temp_array = JSON.parse(window.localStorage.getItem('downloaded_files'));
				temp_array.push($.md5(URL));
				window.localStorage.setItem('downloaded_files',JSON.stringify(temp_array));			
			}, 
			function(error) {
				alert('Crap something went wrong...');	
				alert(JSON.stringify(error));
			},
			true
		);
	}
	
	function check_download(URL) {
		console.log("check_download URL: " + URL);
		var temp_array = JSON.parse(window.localStorage.getItem('downloaded_files'));
		console.log("check_download Extension: " + window.localStorage.getItem('downloaded_files'));
		if($.inArray($.md5(URL),temp_array) != -1)
		{
			console.log("check_download true");
			return true;
		}
		else
		{
			console.log("check_download false");
			return false;
		}
	}
}





