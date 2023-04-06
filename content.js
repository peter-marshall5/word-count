chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
	if (message.action == 'count') {
		sendResponse(document.body.innerText.trim().split(' ').length)
	}
} );
