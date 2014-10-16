function register(){
	var flag =0;
	if(document.getElementById('register_fname').value==""){
		document.getElementById('register_fname').style.borderColor="#FF0000";
		flag = 1;
	}
	else{
		document.getElementById('register_fname').style.borderColor="";
	}
	
	if(document.getElementById('register_lname').value==""){
		document.getElementById('register_lname').style.borderColor="#FF0000";
		flag = 1;
	}
	else{
		document.getElementById('register_lname').style.borderColor="";
	}
	
	if(document.getElementById('register_postcode').value==""){
		document.getElementById('register_postcode').style.borderColor="#FF0000";
		flag = 1;
	}
	else{
		document.getElementById('register_postcode').style.borderColor="";
	}
	
	
	if(document.getElementById('register_mobile').value==""){
		document.getElementById('register_mobile').style.borderColor="#FF0000";
		flag = 1;
	}
	else{
		document.getElementById('register_mobile').style.borderColor="";
	}
	
	if(flag==0){
		var vals = $('#login_frm').serialize();
		$.post(serverurl+"register.php", vals, function(data){
			window.localStorage.setItem("member_id", data);
			window.localStorage.setItem("firstname", $('#register_fname').val());
			window.localStorage.setItem("lastname", $('#register_lname').val());
			window.localStorage.setItem("postcode", $('#register_postcode').val());
			window.localStorage.setItem("mobileno", $('#register_mobile').val());
			window.location = '#/log';
		})
			
	}
	else{
		$('#validating_div').html('Please check highlighted fields');
	}
}


function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
}
	//Capturing photo
function capturePhoto() {

	  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
	  quality : 25, 
	  destinationType : Camera.DestinationType.FILE_URI, 
	  sourceType : Camera.PictureSourceType.CAMERA, 
	  allowEdit : true,
	  encodingType: Camera.EncodingType.JPEG,
	  popoverOptions: CameraPopoverOptions,
	  saveToPhotoAlbum: true });
}
    
   
function onPhotoDataSuccess(imageSrc) {
	var html = '<img src="'+imageSrc+'" />'
	$('#image_preview').html(html);
	$('#filepath').html(imageSrc);
}

function getphoto_cooridinates(){
	navigator.geolocation.getCurrentPosition(onGPSSuccess, onError, {enableHighAccuracy: true});
}

function onGPSSuccess(position){
	$('#latitude').val(position.coords.latitude);
	$('#longitude').val(position.coords.longitude);
}
	
function onFail(message) {
	alert('Failed because: ' + message);
	
}

function upload_record(){
	var win = function (r) {
		console.log("Code = " + r.responseCode);
		console.log("Response = " + r.response);
		console.log("Sent = " + r.bytesSent);
		alert("Record sent successfully");
		window.location="#/send";
	}
	
	var fail = function (error) {
		alert("An error has occurred: Code = " + error.code);
		console.log("upload error source " + error.source);
		console.log("upload error target " + error.target);
	}
	
	var fileURI = $('#filepath').val();
	
	var options = new FileUploadOptions();
	options.fileKey = "file";
	options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
	options.mimeType = "text/plain";
	
	var params = {};
	params.description = $('#description').val();
	params.latitude = $('#latitude').val();
	params.longitude = $('#longitude').val();
	params.member_id = window.localStorage.getItem("member_id");;
	
	options.params = params;
	
	var ft = new FileTransfer();
	ft.upload(fileURI, encodeURI(serverurl+"upload.php"), win, fail, options);
}