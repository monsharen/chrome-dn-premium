# chrome-dn-premium
A Chrome plugin that demonstrates how easy it is to get past DN's payment wall

# Alternatives
It is also possible to create a normal browser bookmark which "links" the following javascript (tested in Chrome): 
```javascript
javascript:(function(){document.getElementById(%22serviceplusPaywallpaywall-container%22).style.display%3D%22none%22%3Bdocument.getElementsByClassName(%22article__premium-content%22)%5B0%5D.style.display%3D%22block%22%3B})()
```
