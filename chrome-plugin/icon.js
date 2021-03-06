chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    chrome.browserAction.setIcon({
      path: message.icon
    });

    result = {
      message: "Setting Icon to " + message.icon
    }
    sendResponse(result);
  } catch (error) {
    result = {
      message: error
    }
    sendResponse(result);
  }
});
