	//document.write("<script src='http:\/\/ajax.aspnetcdn.com\/ajax\/mobileservices\/MobileServices.Web-1.1.2.min.js'><\/script>");
	
	var click = false;
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = document.location.protocol + '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';

    document.getElementsByTagName('head')[0].appendChild(script)
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