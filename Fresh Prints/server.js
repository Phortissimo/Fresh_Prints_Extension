
	var MobileServiceClient = WindowsAzure.MobileServiceClient;
	var client = new MobileServiceClient('https://freshprintsservice.azure-mobile.net/', 'baJFydlmYLROPHHmpckTpnXbxKNnIK59');
	var todoItemTable = client.getTable('todoitem');
	
	var query = todoItemTable.where({
		complete: false
	}).read().done(function (results) {
		alert(JSON.stringify(results));
	}, function (err) {
		alert("Error: " + err);
	});
	console.log(query);