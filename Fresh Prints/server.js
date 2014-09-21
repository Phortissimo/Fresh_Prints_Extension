function azure() {
	var MobileServiceClient = WindowsAzure.MobileServiceClient;
	var client = new MobileServiceClient('https://freshprintsservice.azure-mobile.net/', 'baJFydlmYLROPHHmpckTpnXbxKNnIK59');
	var todoItemTable = client.getTable('todoitem');
	console.log('call');
	
	var query = todoItemTable.read().done(function (results) {
		console.log('reading');
		if(results[0].text == 'waiting') {
			todoItemTable.update({
				id: results[0].id,
				text: 'verifytime'
			})
		}	
		var tempresult = results[0].text;
		if(tempresult.length >= 13) {
			decryp = tempresult.substring(13,18);
			todoItemTable.update({
				id: results[0].id,
				text: 'waiting'
			})
			success=true;
		}
		if(success) {
			clearInterval(timerId);
			successful();
			console.log('end');
		}
	}, function (err) {
		alert("Error: " + err);
	})
}