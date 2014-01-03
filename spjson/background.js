chrome.webRequest.onBeforeSendHeaders.addListener(function (data) {
		console.log("adding listener");
		var headers = data.requestHeaders;
		for(var i = 0; i < headers.length; i++){
			if(headers[i].name === "Accept") {
				headers[i].value = "application/json;odata=verbose";
			}
			return { requestHeaders: headers };
		}
	},
	{ urls: ["*://*.sharepoint.com/_api*"] }, ["blocking", "requestHeaders"]
);