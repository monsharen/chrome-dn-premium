var urlMatch = "www.dn.se";

var showHideElementsCode = 'document.getElementById("serviceplusPaywallpaywall-container").style.display="none";' + 
    	'document.getElementsByClassName("article__premium-content")[0].style.display="block"';

chrome.browserAction.onClicked.addListener(function(tab) {
  if (tab.url.indexOf(urlMatch) != -1) {
  	chrome.tabs.executeScript({
    	code: showHideElementsCode
  	});
  }
});