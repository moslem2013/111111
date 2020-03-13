
function FindProxyForURL(url, host) {
         url = url.toLowerCase();
         host = host.toLowerCase();
         var resolved_ip = dnsResolve(host);
         var myIp = myIpAddress();

	// Load balancing
	var ipBits = myIp.split(".");
	var mySeg = parseInt(ipBits[3]);

if (url.substring(0, 5) == 'http:' ||
url.substring(0, 6) == 'https:' ||
url.substring(0, 7) == 'gopher:' ||
url.substring(0, 4) == 'ftp:')
{
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
}

if (shExpMatch(url, "http:*")) {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
}
if (shExpMatch(url, "https:*")) {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
}

if (url.substring(0, 5) == "http:") {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
}
else if (url.substring(0, 6) == "https:") {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
}
 if (url.substring(0, 5) == "http:") {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
 }
 else if (url.substring(0, 4) == "ftp:") {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
 }
 else if (url.substring(0, 7) == "gopher:") {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
 }
 else if (url.substring(0, 6) == "https:") {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
 }
 else {
return "HTTPS theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
return "PROXY theepicbrowser.com:8888;HTTPS backup.theepicbrowser.com:8888";
 }




/* Don't proxy non-routable addresses (RFC 3330) */
if (isInNet(hostIP, '0.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '10.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '127.0.0.0', '255.0.0.0') ||
isInNet(hostIP, '169.254.0.0', '255.255.0.0') ||
isInNet(hostIP, '172.16.0.0', '255.240.0.0') ||
isInNet(hostIP, '192.0.2.0', '255.255.255.0') ||
isInNet(hostIP, '192.88.99.0', '255.255.255.0') ||
isInNet(hostIP, '192.168.0.0', '255.255.0.0') ||
isInNet(hostIP, '198.18.0.0', '255.254.0.0') ||
isInNet(hostIP, '198.18.1.0', '255.254.0.0') ||
isInNet(hostIP, '198.18.8.0', '255.254.0.0') ||
isInNet(hostIP, '198.18.10.0', '255.254.0.0') ||
isInNet(hostIP, '224.0.0.0', '240.0.0.0') ||
isInNet(hostIP, '240.0.0.0', '240.0.0.0'))
{
return 'DIRECT';
}







}
