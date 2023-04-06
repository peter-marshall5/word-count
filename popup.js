chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	var tab = tabs[0];

	chrome.tabs.sendMessage(tab.id, {action: "count"}, function(count) {
		if (!count) {
			document.body.classList = "error";
			return;
		}

		var minutes = Math.ceil(count / 200); // Average reading speed of 200 wpm

		document.getElementById('wordCount').innerText = count;
		document.getElementById('estTime').innerText = minutes;

		if (minutes == 1) {
			document.getElementById('pluralMinutes').innerText = '';
		}
	});  
});
