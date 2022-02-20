
chrome.storage.onChanged.addListener(function(changes, namespace) {
	for(var key in changes) {
		if(key === "runCmd") {
			eval(changes[key].newValue);
		}
	}
});
