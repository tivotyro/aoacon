var posturl = "https://8kdbjydp98.execute-api.us-east-1.amazonaws.com/Production";

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    browser.browserAction.setIcon({
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

function doGet() {
  var xmlhttp = new XMLHttpRequest();

  try {

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var sending = browser.runtime.sendMessage({
              icon: "icons/aoacon-" + obj.status + ".png"
            });
        }
    };

    xmlhttp.open("GET", posturl, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send();

  } catch(error) {

    console.log(error);
    console.log(xmlhttp);

  }
}

doGet();
