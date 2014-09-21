	var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = document.location.protocol + '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
	$("head").append(script2);
	var success = false;
	var decryp = '';
	var timerId = 0;
	var user = '';
	//var clicked = false;
	
	var click = false;
	var passfield = document.getElementById("Passwd");
	passfield.setAttribute('style','display:none');
	var staySignedIn = document.getElementById("PersistentCookie");
	staySignedIn.disabled = true;
	staySignedIn.checked = false;
	var email = document.getElementById("Email");
	email.style.borderColor = "LightGray";
	var signIn = document.getElementById("signIn");
	signIn.value = "Sign in with Fresh Prints!";
	//if (clicked == false){
		//signIn.click();
		//clicked = true;
	//}
	//var errormsg = document.getElementById("errormsg_0_Email");
	//errormsg.setAttribute('style','visibility:hidden');
	
	
	var printImage = document.createElement("img");
	printImage.src = "http://getonelifeapp.com/waitingforprint.gif";
	printImage.setAttribute('alt','Waiting for fingerprint');
	$("#Email").after(printImage);
	printImage.setAttribute('style','display:none');
	
	
	signIn.onclick = function(e) {
		if(!success) {	
			e.preventDefault();
			if(!click) {
				signIn.value = "Cancel";
				printImage.setAttribute('style','display:inline');
				user = email.value;
				email.setAttribute('style','display:none');
				click = true;
				timerId = setInterval(azure,500);
				console.log('click');
			}else {
				click = false;
				clearInterval(timerId);
				signIn.setAttribute('style','visibility:visible');
				email.setAttribute('style','display:inline');
				printImage.setAttribute('style','display:none');
				signIn.value = "SignIn with Fresh Prints!";
				}
		}
	}
function successful() {
	email.setAttribute('style','display:inline');
	email.value = user;
	email.style.borderColor = 'LightGray';
	printImage.setAttribute('style','display:none');
	passfield.setAttribute('style','display:inline');
	var pass1 = "yolo";
	passfield.value = pass1.concat(decryp);
	$('signIn').unbind('click');
	signIn.value = "Sign in";
	signIn.click();
}	