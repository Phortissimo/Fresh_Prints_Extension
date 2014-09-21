	var MobileServiceClient = WindowsAzure.MobileServiceClient;
	var client = new MobileServiceClient('https://freshprintsservice.azure-mobile.net/', 'baJFydlmYLROPHHmpckTpnXbxKNnIK59');
	var todoItemTable = client.getTable('todoitem');
	
	var query = todoItemTable.read().done(function (results) {
		if(results[0].text == 'waiting') {
			todoItemTable.update({
				id: results[0].id,
				text: 'verifytime'
			})
		}	
		if(results[0].text == 'verifysuccess') {
			todoItemTable.update({
				id: results[0].id,
				text: 'waiting'
			})
		}
	}, function (err) {
		alert("Error: " + err);
	})