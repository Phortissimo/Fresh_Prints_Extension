	var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = document.location.protocol + '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
	$("head").append(script2);
	
	var click = false;
	var passfield = document.getElementById("Passwd");
	passfield.setAttribute('style','display:none');
	var staySignedIn = document.getElementById("PersistentCookie");
	staySignedIn.disabled = true;
	staySignedIn.checked = false;
	var email = document.getElementById("Email");
	email.style.borderColor = "LightGray";
	var errormsg = document.getElementById("errormsg_0_Email");
	errormsg.setAttribute('style','visibility:hidden');
	
	var printImage = document.createElement("img");
	printImage.src = "http://getonelifeapp.com/waitingforprint.png";
	printImage.setAttribute('alt','Waiting for fingerprint');
	$("#Email").after(printImage);
	printImage.setAttribute('style','display:none');
	
	var signIn = document.getElementById("signIn");
	signIn.value = "Sign in with Fresh Prints!";
	signIn.onclick = function(e) {
		e.preventDefault();
		if(!click) {
			signIn.value = "Cancel";
			printImage.setAttribute('style','display:inline');
			email.setAttribute('style','display:none');
			click = true;
		}else {
			click = false;
			signIn.setAttribute('style','visibility:visible');
			email.setAttribute('style','display:inline');
			printImage.setAttribute('style','display:none');
			signIn.value = "SignIn with Fresh Prints!";
			}
	}