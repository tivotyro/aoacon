var posturl = "https://8kdbjydp98.execute-api.us-east-1.amazonaws.com/Production";

var body = document.body.innerHTML;

var regexp = /populatePlannerTabFromJson\((.*)\)\;/;
var match, matches = [];

match = regexp.exec(body);

if (match != null) {
  var postdata = {
    action: "updateStatus",
    data: JSON.parse(match[1])
  };

  doPost(posturl, postdata);
}

function doPost(posturl, postdata) {
  var xmlhttp = new XMLHttpRequest();

  try {

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("SUCCESS");
            console.log(this.responseText);
        }
    };

    xmlhttp.open("POST", posturl, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(JSON.stringify(postdata));

  } catch(error) {

    console.log(xmlhttp);
    console.log(error);

  }
}











/*
function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org"
  });
}

browser.browserAction.onClicked.addListener(openPage);
*/
